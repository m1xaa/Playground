# This example is the new way to use the OpenAI lib for python
from openai import OpenAI
import json


def get_client():
    return OpenAI(
        api_key = "LL-GfuN46ROnuFl5b8tRt5fcRuQ8siBplJ50wgfXRitdemB9yTIKBQdx7eVnWPpNDX5",
        base_url = "https://api.llama-api.com"
    )

def get_response(description):
    client = get_client()
    response = client.chat.completions.create(
        model="llama-70b-chat",
        messages=[
            {"role": "system", "content": "Assistant is a large language model trained by OpenAI."},
            {"role": "user", "content": description},
            {"role": "user", "content": "based on what i have provided can u give me a simple task for my kid?"},
            {"role": "user", "content": "can u return the response in JSON format containing fields title, category and description of a task?"},
            {"role": "user", "content": "In the content part of a message can u include only the json without any additional characters"}
        ]
    )

    return json.loads(response.choices[0].message.content)
