from converter import convert
from gpt_train import parse
import os 
import json
import argparse


argparser = argparse.ArgumentParser()

argparser.add_argument('-i','--input', type=str)
argparser.add_argument('-r','--run', type=str, default=False)

args = argparser.parse_args()

filename = args.input
run_all = args.run



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
        #print(test)
        response = parse(test)
        print(response)
        #print(' ')
        # with open('./results/'+filename.split('.')[0]+'.json','w') as f:
        #     json.dump(response, f)
        #     f.close()
        return response
    except Exception as e:
        print(e)


if run_all:

    run('add_email.html')
    run('first_party_authentication.html')
    run('invite.html')
    run('invite2.html')
    run('third_party_authenticate.html')
    run('verify.html')
else:

    run(filename)





