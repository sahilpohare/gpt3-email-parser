import openai
from gpt_buffer import inp, oup
from gpt_buffer import GPT
from converter import convert
import os
import math
openai.api_key = 'sk-r5uc6is7lzeluGzpT0DOfYjbeJh7s8WPmMyfhngY'
PATH = './train_html'

def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
        resp = convert(resp)
    return resp

train_mails = {
    'Auth.html':'resp1',
    'email_added.html':'resp4',
    'invite1.html':'resp2',
    'verification.html':'resp3'
}


resp = {
    'resp1':'{"Type":"Auth", "name":"rahul81", "application":"Dockship", "link":"https://github.com/settings/connections/applications/ccb42a8e19665bcd148e", "From":"The GitHub Team"}',
    'resp2':'{"Type":"Invitation", "invitor":"rahul81", "repo":"GPT3parser", "repolink":"https://github.com/rahul81/GPT3parser", "For":"sahilpohare@gmail.com"}',
    'resp3':'{"Type":"Verfication", "name":"rahul81", "Device":"Linux", "verification_code":"849680", "From":"The GitHub Team"}',
    'resp4':'{"Type":"email_added", "name":"rahul81", "new_email":"rahul.das@adypu.edu.in", "From":"The GitHub Team"}'
}


test_path = './test_html'
def parse(test,tokens):
    gpt3 = GPT(engine='davinci',temperature=0.9,max_tokens=tokens)

    for key, val in train_mails.items():
        mail = read_html(os.path.join(PATH,key))
        # gpt3.add_example(Example(mail,resp[val]))
        gpt3.add_input(inp(mail))
        gpt3.add_output(oup(resp[val]))

    test = []
    for mail in mails:
        test.append(read_html(os.path.join(test_path,mail)))
    

    # print(gpt3.craft_query(test))
    print(gpt3.craft_query(test))
    # output = gpt3.get_top_reply(test).replace('output: ','').strip()
    print(gpt3.get_top_reply(test))

    return 0

# parse(read_html('./test_html/add_email.html'))

mails = ['add_email.html','invite.html']

parse(mails,  min(len(mails)*64,2048))



