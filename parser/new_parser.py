from converter import convert
from gpt_train import parse
import os 
import pandas as pd 
import json

PATH = './test_html'

def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
        resp = convert(resp)
    return resp

test = read_html(PATH+'/invite2.html')

print(test)

response = parse(test)
response = json.loads(response)

print(type(response))
print(response)







