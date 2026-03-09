import boto3
import os
import json


def handler(event: dict, context) -> dict:
    """Листинг файлов в S3 хранилище по префиксу"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    prefix = (event.get('queryStringParameters') or {}).get('prefix', '')
    key_id = os.environ['AWS_ACCESS_KEY_ID']

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=key_id,
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )

    files = []
    buckets_to_try = ['files']
    for bucket in buckets_to_try:
        try:
            response = s3.list_objects_v2(Bucket=bucket, Prefix=prefix, MaxKeys=500)
            for obj in response.get('Contents', []):
                key = obj['Key']
                url = f"https://cdn.poehali.dev/{bucket}/{key}"
                files.append({'key': key, 'url': url})
        except Exception as e:
            files.append({'error': str(e), 'bucket': bucket})

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'files': files, 'key_id': key_id}),
    }
