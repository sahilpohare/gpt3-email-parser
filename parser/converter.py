from bs4 import BeautifulSoup

def convert(mail):

    soup = BeautifulSoup(mail,features='html.parser')
    for script in soup(["script", "style"]):
        script.extract()    # rip it out

    # get text
    text = soup.get_text()
    # break into lines and remove leading and trailing space on each
    lines = (line.strip() for line in text.splitlines())
    # break multi-headlines into a line each
    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))
    # drop blank lines
    text = ' '.join(chunk for chunk in chunks if chunk)

    return text


doc = '''
<p></p>
<p>This is a trial</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/rahul81/GPT3parser/issues/1">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/ALLZXM6YD74IOZ4QO6K4YTDR7U2FDANCNFSM4PYTW75A">unsubscribe</a>.<img src="https://github.com/notifications/beacon/ALLZXM3R33KV7F22KRGESOLR7U2FDA5CNFSM4PYTW75KYY3PNVWWK3TUL52HS4DFUVEXG43VMWVGG33NNVSW45C7NFSM4KCDPYCQ.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/rahul81/GPT3parser/issues/1",
"url": "https://github.com/rahul81/GPT3parser/issues/1",
"name": "View Issue"
},
"description": "View this Issue on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>
'''

# print(convert(doc))
