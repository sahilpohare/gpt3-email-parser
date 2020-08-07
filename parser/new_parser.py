from converter import convert
from gpt_train import parse
import os 

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

print(response)

#Now parse this mail the train gpt

# print(gpt_invite(mail_test))






