import mailparser 


path='./message.txt'

def parse_mail(path):

    mail = mailparser.parse_from_file(path)

    # print(mail.mail)
    print(mail.text_html[0])


parse_mail(path)