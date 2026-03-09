"""
Загрузка видеофайла в S3 и возврат публичной CDN-ссылки.
Принимает base64-кодированное видео в теле запроса.
"""
import json
import os
import base64
import uuid
import boto3


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    file_data = body.get("file")
    file_name = body.get("name", "video.mp4")
    content_type = body.get("contentType", "video/mp4")

    if not file_data:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "No file provided"}),
        }

    video_bytes = base64.b64decode(file_data)

    ext = file_name.rsplit(".", 1)[-1].lower() if "." in file_name else "mp4"
    key = f"videos/{uuid.uuid4()}.{ext}"

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    s3.put_object(
        Bucket="files",
        Key=key,
        Body=video_bytes,
        ContentType=content_type,
    )

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/files/{key}"

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"url": cdn_url, "key": key}),
    }
