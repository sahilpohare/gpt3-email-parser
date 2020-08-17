import openai
from gpt import Example
from gpt import GPT
from converter import convert
import os
import requests
from dataretrieve import get_data, get_content, get_answer
import json


class GPTTrain(object):
    def __init__(self, domain="github"):
        self.domain = domain
        self.data = get_data(self.domain)

    def read_html(self, path):

        with open(path, "r") as f:
            resp = f.read()
            f.close()
            resp = convert(resp)
        return resp

    def parse(self, test):
        gpt3 = GPT(engine="davinci", temperature=0.9, max_tokens=150)

        for instance in self.data:
            gpt3.add_example(Example(get_content(instance), get_answer(instance)))
        output = gpt3.get_top_reply(test).replace("output: ", "").strip()

        output = output[: output.find("}") + 1]
        output = output.replace("'", '"')

        return output, list(self.data[0]["answer"].keys())
