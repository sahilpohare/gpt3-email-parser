from dotenv import load_dotenv

load_dotenv(dotenv_path='../.env')
from converter import convert
from gpt_train import GPTTrain
import os
import json
import argparse
import re

subdomain = ["github", "github_actions"]

domain = os.environ.get("domain")

argparser = argparse.ArgumentParser()

argparser.add_argument("-i", "--input", type=str, default=None)
argparser.add_argument("-b", "--body", type=str, default=None)

domainsToProcess = "trello"

args = argparser.parse_args()

filename = args.input
body = args.body


if body != None:
    domain = json.loads(body)["domain"]
    body = json.loads(body)["content"]

    train = GPTTrain(domain=domain)


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


def run(filename, train, domain):
    try:
        if domain not in domainsToProcess:
            test = read_html(os.path.join(PATH, filename), domain)
            response, check = train.parse(test)
        else:
            response, check = train.parse(filename)

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
        print(e)


def recurse(domain, counter):
    train = GPTTrain(domain=domain)

    if filename != None:
        response, status = run(filename, train, domain)
        print(response)
        if status == "fail":
            # print("fail")
            if counter < len(subdomain) - 1:
                counter += 1
                domain = subdomain[counter]
                recurse(domain, counter)
            else:
                # print("end of domains")
                pass
        else:
            # print("success")
            pass
    elif body != None:
        response, check = train.parse(convert(body))
        if json.loads(response)[list(json.loads(response).keys())[-1]] == check:
            print("Yes")


if domain in subdomain and domain not in domainsToProcess:
    counter = 0
    recurse(domain, counter)

else:
    train = GPTTrain(domain=domain)
    if filename != None:
        process(filename, train, domain)
    elif body != None:
        process(body, train, domain)
