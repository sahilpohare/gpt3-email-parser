import requests

def get_data(domain):
    data = requests.get('http://localhost:4001/getSamples/'+domain)
    data = data.json()

    return data

def get_content(data_instance):
    return data_instance['prompt']['content']

def get_answer(data_instance):
    return data_instance['answer']

