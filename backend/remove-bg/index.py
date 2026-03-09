"""Скачивает JPEG логотип, удаляет чёрный фон, сохраняет PNG в S3 и возвращает CDN-ссылку."""
import json
import os
import io
import urllib.request
import boto3
from PIL import Image


def handler(event: dict, context) -> dict:
    headers = {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type"}

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    image_url = body.get("url", "https://cdn.poehali.dev/files/72784b27-9292-49fa-b815-c6aaa9146f3e.jpg")
    output_key = body.get("key", "logos/logo_transparent.png")
    threshold = int(body.get("threshold", 40))

    # Скачиваем изображение
    with urllib.request.urlopen(image_url) as resp:
        img_data = resp.read()

    img = Image.open(io.BytesIO(img_data)).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    # Удаляем чёрный фон: пикселы, у которых R,G,B все < threshold — делаем прозрачными
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if r < threshold and g < threshold and b < threshold:
                pixels[x, y] = (r, g, b, 0)

    # Сохраняем в PNG
    out = io.BytesIO()
    img.save(out, format="PNG")
    out.seek(0)

    # Загружаем в S3
    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )
    s3.put_object(Bucket="files", Key=output_key, Body=out.read(), ContentType="image/png")

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{output_key}"

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"url": cdn_url}),
    }
