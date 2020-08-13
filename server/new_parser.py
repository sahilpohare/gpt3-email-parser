from dotenv import load_dotenv
load_dotenv()
from converter import convert
from gpt_train import parse
import os 
import json
import argparse



argparser = argparse.ArgumentParser()

argparser.add_argument('-i','--input', type=str, default=None)
argparser.add_argument('-b','--body', type=str, default=None)
argparser.add_argument('-d','--domain', type=str, default=None)


args = argparser.parse_args()

filename = args.input
body = args.body

if body != None:
    body = json.loads(body)['content']

PATH = 'test_html'

def process(filename):
    if filename != None and body == None:
        mail = read_html(os.path.join(PATH,filename))
    else:
        mail = filename
    mailtest = re.split('boards.trello.com|on Trello|--',mail)[1:-2]
    for i in mailtest:
        print(i)
        run(i)


def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
        if domain in domainsToProcess:
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
        response = json.dumps(response.replace("'",'"'))
        print(response)
        return response
    except Exception as e:
        print(e)


if domain in domainsToProcess:

    if filename != None:
        process(filename)
    elif body != None:
        process(body)

else:
    if filename != None:
        run(filename)
    elif body != None:
        response =parse(convert(body))
        response = response[:response.find('}')+1]
        response = json.dumps(response.replace("'",'"'))
        print(response)

    
