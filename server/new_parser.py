from converter import convert
from gpt_train import parse
import os 
import json
import argparse


argparser = argparse.ArgumentParser()

argparser.add_argument('-i','--input', type=str, default=None)
argparser.add_argument('-b','--body', type=str, default=None)

args = argparser.parse_args()

filename = args.input
body = args.body
body = json.loads(body)['content']





PATH = './test_html'

def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
        resp = convert(resp)
    return resp


def run(filename):
    try:
        test = read_html(os.path.join(PATH,filename))
        response = parse(test)
        print(response)
        return response
    except Exception as e:
        print(e)



if filename != None:
    run(filename)
elif body != None:
    response = parse(convert(body))
    print(response)

    
