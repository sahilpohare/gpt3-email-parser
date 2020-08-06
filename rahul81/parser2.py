import openai
openai.api_key = 'sk-r5uc6is7lzeluGzpT0DOfYjbeJh7s8WPmMyfhngY'
from gpt import Example
from gpt import GPT
import time
import json

mail1 = str('''Hey rahul81!

A third-party OAuth application (Dockship) with user:email scope was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/ccb42a8e19665bcd148e for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
The GitHub Team''')


mail2 = str('''@sahilpohare has invited you to collaborate on the
sahilpohare/libp2pTSNeuralnet repository
You can accept or decline this invitation. You can also head over to https://github.com/sahilpohare/libp2pTSNeuralnet to check out the repository or visit @sahilpohare to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for rahuldas.rr81@gmail.com. If you were not expecting this invitation, you can ignore this email. If @sahilpohare is sending you too many emails, you can block them or report abuse.''')



mail3 = str('''Hey sahilp!

A third-party OAuth application (Jovian) with user:email scope was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/88ef015e78c76462b750 for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
The GitHub Team''')


mail4 = str('''@rahul81 has invited you to collaborate on the
rahul81/neuralnets repository
You can accept or decline this invitation. You can also head over to https://github.com/rahul81/neuralnets to check out the repository or visit @rahul81 to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for sahilpohare@gmail.com. If you were not expecting this invitation, you can ignore this email. If @rahul81 is sending you too many emails, you can block them or report abuse.''')



mail5 = str('''Hey gangu!

A third-party OAuth application (Turista) with user:email scope was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/ccb42a8e19665bcd148e for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
The GitHub Team''')


mail6 = str('''@saket11 has invited you to collaborate on the
saket11/syrian repository
You can accept or decline this invitation. You can also head over to https://github.com/saket11/syrian to check out the repository or visit @saket11 to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for rahuldas.rr.rd@gmail.com. If you were not expecting this invitation, you can ignore this email. If @saket11 is sending you too many emails, you can block them or report abuse.''')




mail7 = str('''Hey ShriRam!

A third-party OAuth application (Mandir) with user:email scope was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/ccb42a8e19665bcd148e for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
UP Team''')




mailv_1 = str('''Hey rahul81!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on Linux
Verification code: 849680

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/admin to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team''')

mailv_2 = str('''Hey nikhilm!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on android
Verification code: 234557

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/admin to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team''')






mail8 = str('''@Janki has invited you to collaborate on the
Janki/ayodhya repository
You can accept or decline this invitation. You can also head over to https://github.com/Janki/ayodhya to check out the repository or visit @Janki to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for lakshman@gmail.com. If you were not expecting this invitation, you can ignore this email. If @Janki is sending you too many emails, you can block them or report abuse.''')


a_mail = str('''Hey Meowslalot!

A third-party OAuth application (Amazon) with user:email scope was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/cb056d1fa711714f1f71 for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
Amazon Team''')


i_mail = str('''@nikhilm has invited you to collaborate on the
nikhilm/opendev repository
You can accept or decline this invitation. You can also head over to https://github.com/nikhilm/opendev to check out the repository or visit @nikhilm to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for sahilpohare@gmail.com. If you were not expecting this invitation, you can ignore this email. If @nikhilm is sending you too many emails, you can block them or report abuse.''')

i_mail2 = str('''@obama has invited you to collaborate on the
obama/USA repository
You can accept or decline this invitation. You can also head over to https://github.com/obama/USA to check out the repository or visit @obama to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for donaltrump@gmail.com. If you were not expecting this invitation, you can ignore this email. If @obama is sending you too many emails, you can block them or report abuse.''')

i_mail3 = str('''@Modi has invited you to collaborate on the
Modi/Bhoomipoojan repository
You can accept or decline this invitation. You can also head over to https://github.com/Modi/Bhoomipoojan to check out the repository or visit @Modi to learn a bit more about them.

This invitation will expire in 7 days.

View invitation
Note: This invitation was intended for amitshah@gmail.com. If you were not expecting this invitation, you can ignore this email. If @Modi is sending you too many emails, you can block them or report abuse.''')




mailv_t = str('''Hey sahilp!

A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.

Device: Chrome on windows
Verification code: 098765

If you did not attempt to sign in to your account, your password may be compromised. Visit https://github.com/settings/admin to create a new, strong password for your GitHub account.

If you'd like to automatically verify devices in the future, consider enabling two-factor authentication on your account. Visit https://help.github.com/articles/configuring-two-factor-authentication learn about two-factor authentication.

If you decide to enable two-factor authentication, ensure you retain access to one or more account recovery methods. See https://help.github.com/articles/configuring-two-factor-authentication-recovery-methods in the GitHub Help.

Thanks,
The GitHub Team''')






gpt_3auth = GPT(engine="davinci",temperature=.9,max_tokens=80)


gpt_3auth.add_example(Example(mail1,'{"name":"rahul81, "Application":"Dockship", "From":"The GitHub Team", "type":"Auth"}'))
gpt_3auth.add_example(Example(mailv_1,'{"name":"rahul81" , "Device":"Linux", "verification_code":"849680", "From":"The GitHub"}'))
gpt_3auth.add_example(Example(mail3,'{"name":"sahilp", "Application":"Jovian", "From":"The GitHub Team", "type":"Auth"}'))
gpt_3auth.add_example(Example(mail8,'invitor: Janki\nrepo: ayodhya\nlink: https://github.com/Janki/ayodhya\nFor: lakshman@gmail.com\ntype: Invitation'))
gpt_3auth.add_example(Example(mail8,'{"invitor": "Janki", "repo": "ayodhya", "link": "https://github.com/Janki/ayodhya", "For": "lakshman@gmail.com", "type": "Invitation"}'))

# gpt_3auth.add_example(Example(mail5,'name: gangu\nApplication: Turista\nFrom: The GitHub Team\ntype: Auth'))



# st = time.time()

# for i in range(8):
#     print(i+1)
#     output = gpt_3auth.submit_request(a_mail)
#     print("Auth:", output['choices'][0].text)

# end = time.time()
# print(f"Time: {end-st}")


def write_to_json(output,filename):
    output = json.dumps(output['choices'][0].text)
    with open('./results/'+filename+'.json', 'w') as f:
        json.dump(output,f)



print('Input: ',a_mail)
output = gpt_3auth.submit_request(a_mail)
print("Auth:", output['choices'][0].text)


write_to_json(output,'Auth')


print('Input: ',mailv_t)
output = gpt_3auth.submit_request(mailv_t)
print("verify:", output['choices'][0].text)

write_to_json(output,'Verification')



print('Input: ',i_mail)
output = gpt_3auth.submit_request(i_mail)
print("Invitation", output['choices'][0].text)

write_to_json(output,'Invitation')



















