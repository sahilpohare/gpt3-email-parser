from dotenv import load_dotenv

load_dotenv(dotenv_path="../.env")
from converter import convert
from gpt_train import GPTTrain
import os
import json
import argparse
import re
import requests


argparser = argparse.ArgumentParser()

argparser.add_argument("-i", "--input", type=str, default=None)
argparser.add_argument("-b", "--body", type=str, default=None)


args = argparser.parse_args()

filename = args.input
body = args.body


def get_data(domain):
    data = requests.get("http://localhost:3200/database/getSamples/" + domain)
    data = data.json()
    return data


if body != None:
    data_json = json.loads(body)
    domain = data_json["domain"]
    body = data_json["content"]
    c_type = data_json["contentType"]

subdomain = requests.get("http://localhost:3200/database/getSubDomains/" + domain).json()


"""
PATH = "../test_html"


def process(filename, train, domain):
    if filename != None and body == None:
        mail = read_html(os.path.join(PATH, filename), domain)
    else:
        mail = filename
    mailtest = re.split("boards.trello.com|on Trello|--", mail)[1:-2]
    for i in mailtest:
        # print(i)
        resp, _ = run(i, train, domain)
        print(resp)


def read_html(path, domain):

    with open(path, "r") as f:
        resp = f.read()
        f.close()
        if domain in domainsToProcess:
            return resp
        elif domain == "github_actions":
            return resp

        resp = convert(resp)
    return resp
"""


def run(content, train, domain):
    try:
        response, check = train.parse(content)
        try:
            json.loads(response)
            if list(json.loads(response).keys()) == check:
                response = json.dumps(response)
                return response, "passed"
            else:
                return response, "fail"
        except Exception as e:
            return response, "fail"
    except Exception as e:
        return "Invalid", "fail"


def recurse(body, domain, counter):
    data = get_data(domain)
    train = GPTTrain(data, domain=domain)

    if filename != None:
        response, status = run(filename, train, domain)
        print(response)
        if status == "fail":
            if counter < len(subdomain) - 1:
                counter += 1
                domain = subdomain[counter]
                recurse(body, domain, counter)
            else:
                pass
        else:
            pass
    elif body != None:

        if c_type == "text/plain":
            response, status = run(body, train, domain)

            if status == "fail":
                if counter < len(subdomain) - 1:
                    counter += 1
                    domain = subdomain[counter]
                    recurse(body, domain, counter)
                else:
                    pass
            else:
                print(json.loads(response))
        elif c_type == "text/html":
            body = convert(body)
            response, status = run(body, train, domain)

            if status == "fail":
                if counter < len(subdomain) - 1:
                    counter += 1
                    domain = subdomain[counter]
                    recurse(body, domain, counter)
                else:
                    pass
            else:
                print(json.loads(response))


if domain in subdomain:
    counter = 0
    recurse(body, domain, counter)
