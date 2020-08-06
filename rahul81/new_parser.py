from converter import convert

PATH = './html/'

def read_html(path):

    with open(path,'r') as f:
        resp = f.read()
        f.close()
    return resp


mail1 = read_html(PATH + 'invite1.html')

print(convert(mail1))


"Now parse this mail the train gpt "





