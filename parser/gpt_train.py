import openai
from gpt import Example
from gpt import GPT
from converter import convert
# from gpt_train import parse
import os



train_mails = {
    'Auth.html':'resp1',
    'email_added.html':'resp4',
    'invite1.html':'resp2',
    'verification.html':'resp3'
}


PATH = './train_html'

def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
        resp = convert(resp)
    return resp



resp = {
    'resp1':'{"Type":"Auth", "name":"rahul81", "application":"Dockship", "link":"https://github.com/settings/connections/applications/ccb42a8e19665bcd148e", "From":"The GitHub Team"}',
    'resp2':'{"Type":"Invitation", "invitor":"rahul81", "repo":"GPT3parser", "repolink":"https://github.com/rahul81/GPT3parser", "For":"sahilpohare@gmail.com"}',
    'resp3':'{"Type":"Verfication", "name":"rahul81", "Device":"Linux", "verification_code":"849680", "From":"The GitHub Team"}',
    'resp4':'{"Type":"email_added", "name":"rahul81", "new_email":"rahul.das@adypu.edu.in", "From":"The GitHub Team}'
}




openai.api_key = 'sk-r5uc6is7lzeluGzpT0DOfYjbeJh7s8WPmMyfhngY'


def parse(test):
    gpt3 = GPT(engine='davinci',temperature=0.9,max_tokens=80)


    for key, val in train_mails.items():
        mail = read_html(os.path.join(PATH,key))
        gpt3.add_example(Example(mail,resp[val]))

    output = gpt3.get_top_reply(test).replace('output: ','').strip()

    return output




# def parse(mail):
#     gpt_inv = GPT(engine='davinci',temperature=0.9,max_tokens=62)
#     mail_train = '''sahilpohare invited you to sahilpohare/libp2pTSNeuralnet\n@sahilpohare has invited you to collaborate on thesahilpohare/libp2pTSNeuralnet repository\nYou can accept or decline this invitation.\nYou can also head over to
#             https://github.com/sahilpohare/libp2pTSNeuralnet to check out the repository or visit @sahilpohare to learn a bit more about them.\nThis invitation will expire in 7 days.\nView invitation\nNote: This invitation was intended for nkmishra0103@gmail.com.\n
#             If you were not expecting this invitation, you can ignore this email.\nIf\n@sahilpohare is sending you too many emails, you can\nblock them\nor report abuse.\nGetting a 404 error? Make sure you’re signed in as nikhilm21.\nButton not working? Copy and paste 
#             this link into your browser:\nhttps://github.com/sahilpohare/libp2pTSNeuralnet/invitations\nManage your GitHub email preferences\nTerms •\nPrivacy •\nLog in to GitHub\nGitHub, Inc.\n88 Colin P Kelly Jr Street\nSan Francisco, CA 94107'''
#     gpt_inv.add_example(Example(mail_train,'{"name":"nikhilm21","invitor":"sahilpohare","repository":"libp2pTSNeuralnet","repo_link":"https://github.com/sahilpohare/libp2pTSNeuralnet","type":"invitation"}'))
#     output = gpt_inv.submit_request(mail)
#     return output['choices'][0].text
