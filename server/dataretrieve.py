import requests

def get_data(domain):
    data = requests.get('http://localhost:4001/getSamples/'+domain)
    data = data.json()
    # content = [x['prompt']['content'] for x in data]
    # answer = [x['answer'] for x in data]
    return data

def get_content(data_instance):
    return data_instance['prompt']['content']

def get_answer(data_instance):
    return data_instance['answer']

# data = get_data('github')

# for instance in data:
#     print (get_content(instance))
#     print (get_answer(instance))
#     break
# data, content, answer = get_data('github')
# mails = zip(content,answer)
# print(list(mails))
# con ,ans = get_data('github')
# for i in range(len(con)):
#     print(con[i])
#     print(ans[i])