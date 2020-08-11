import requests

def get_data(domain):
    data = requests.get('http://localhost:4001/getSamples/'+domain)
    data = data.json()
    content = [x['prompt']['content'] for x in data]
    answer = [x['answer'] for x in data]
    return data, content, answer

data, content, answer = get_data('github')
mails = zip(content,answer)
print(list(mails))

