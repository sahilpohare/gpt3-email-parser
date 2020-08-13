import openai
from gpt import Example
from gpt import GPT
from converter import convert
import os
import requests
from dataretrieve import get_data, get_content, get_answer

domain = os.environ.get("domain")

data = get_data(domain)


def read_html(path):

    with open(path, "r") as f:
        resp = f.read()
        f.close()
        resp = convert(resp)
    return resp


def parse(test):
    gpt3 = GPT(engine="davinci", temperature=0.9, max_tokens=150)

    for instance in data:
        gpt3.add_example(Example(get_content(instance), get_answer(instance)))

    output = gpt3.get_top_reply(test).replace("output: ", "").strip()

    return output
