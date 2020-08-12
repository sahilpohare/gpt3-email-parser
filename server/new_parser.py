from converter import convert
# from gpt_train import parse
import os 
import json
import argparse
from dotenv import load_dotenv

load_dotenv()


argparser = argparse.ArgumentParser()

argparser.add_argument('-i','--input', type=str, default=None)
argparser.add_argument('-b','--body', type=str, default=None)
argparser.add_argument('-d','--domain', type=str, default=None)


args = argparser.parse_args()

filename = args.input
body = args.body

if body != None:
    body = json.loads(body)['content']

PATH = '.server/test_html'

def process(filename):
    mail = read_html(os.path.join(PATH,filename))
    mailtest = re.split('\n\n|--',mail)
    fin1 = []
    for e,i in enumerate(mailtest):
        if e%2 != 0:
            fin1.append(i)
    fin1 = fin1[:-3]
    for i in fin1:
        print(i)
        run(i)


def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
        if domain not in domainsToProcess:
            return resp

        resp = convert(resp)
    return resp


def run(filename):
    try:
        if domain not in domainsToProcess:
            test = read_html(os.path.join(PATH,filename))
            response = parse(test)
        else:
            response = parse(filename)
        response = response[:response.find('}')+1]
        print(response)
        return response
    except Exception as e:
        print(e)


if domain in domainsToProcess:

    if filename != None:
        process(filename)
    elif body != None:
        response =parse(body)
        response = response[:response.find('}')+1]
        response = json.dumps(response.replace("'",'"'))
        print(response)
else:
    if filename != None:
        run(filename)
    elif body != None:
        response =parse(convert(body))
        response = response[:response.find('}')+1]
        response = json.dumps(response.replace("'",'"'))
        print(response)

    
