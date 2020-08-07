import openai
from gpt import Example
from gpt import GPT

openai.api_key = 'sk-r5uc6is7lzeluGzpT0DOfYjbeJh7s8WPmMyfhngY'

def gpt_invite(mail):
    gpt_inv = GPT(engine='davinci',temperature=0.9,max_tokens=62)
    mail_train = '''sahilpohare invited you to sahilpohare/libp2pTSNeuralnet\n@sahilpohare has invited you to collaborate on thesahilpohare/libp2pTSNeuralnet repository\nYou can accept or decline this invitation.\nYou can also head over to
            https://github.com/sahilpohare/libp2pTSNeuralnet to check out the repository or visit @sahilpohare to learn a bit more about them.\nThis invitation will expire in 7 days.\nView invitation\nNote: This invitation was intended for nkmishra0103@gmail.com.\n
            If you were not expecting this invitation, you can ignore this email.\nIf\n@sahilpohare is sending you too many emails, you can\nblock them\nor report abuse.\nGetting a 404 error? Make sure you’re signed in as nikhilm21.\nButton not working? Copy and paste 
            this link into your browser:\nhttps://github.com/sahilpohare/libp2pTSNeuralnet/invitations\nManage your GitHub email preferences\nTerms •\nPrivacy •\nLog in to GitHub\nGitHub, Inc.\n88 Colin P Kelly Jr Street\nSan Francisco, CA 94107'''
    gpt_inv.add_example(Example(mail_train,'{"name":"nikhilm21","invitor":"sahilpohare","repository":"libp2pTSNeuralnet","repo_link":"https://github.com/sahilpohare/libp2pTSNeuralnet","type":"invitation"}'))
    output = gpt_inv.submit_request(mail)
    return output['choices'][0].text
