from converter import convert
from gpt_train import parse
import os 
import json
import argparse


argparser = argparse.ArgumentParser()

argparser.add_argument('-i','--input', type=str, default=None)
# argparser.add_argument('-r','--run', type=str, default=False)
argparser.add_argument('-b','--body', type=str, default=None)

args = argparser.parse_args()

filename = args.input
# run_all = args.run
body = args.body


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
        # print(test)
        response = json.loads(parse(test))
        print(response)
        print(' ')
        with open('./results/'+filename.split('.')[0]+'.json','w') as f:
            json.dump(response, f)
            f.close()
        return response
    except Exception as e:
        print(e)



if filename != None:
    run(filename)
elif body != None:
    response = parse(convert(body))
    print(response)


# mails = ('add_email.html','invite.html')



