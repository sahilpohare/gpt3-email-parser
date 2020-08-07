from converter import convert
from gpt_train import gpt_invite
PATH = './html/'

def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
    return resp


mail1 = read_html(PATH + 'invite1.html')

mail_test = convert(mail1)

print(mail_test)
#Now parse this mail the train gpt

print(gpt_invite(mail_test))






