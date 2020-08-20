def get_content(data_instance, c_type):

    body = data_instance["prompt"]["content"]
    if c_type != 'text/plain':
        subject = data_instance['prompt']['subject']
        body = body +' $$ ' +subject
    return body


def get_answer(data_instance):
    return data_instance["answer"]
