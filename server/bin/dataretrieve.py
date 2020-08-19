def get_content(data_instance):

    body = data_instance["prompt"]["content"]
    subject = data_instance['prompt']['subject']
    body = subject +' '+ body
    return body


def get_answer(data_instance):
    return data_instance["answer"]
