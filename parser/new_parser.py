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


def run(filename):
    test = read_html(os.path.join(PATH,filename))
    print(test)
    response = json.loads(parse(test))
    print(response)
    print(' ')
    return response


run('add_email.html')
run('first_party_authentication.html')
run('invite.html')
run('invite2.html')
run('third_party_authenticate.html')
run('verify.html')






