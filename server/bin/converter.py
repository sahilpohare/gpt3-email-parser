from bs4 import BeautifulSoup


def convert(mail):

    soup = BeautifulSoup(mail, features="html.parser")
    for script in soup(["script", "style"]):
        script.extract()

    text = soup.get_text()

    lines = (line.strip() for line in text.splitlines())

    chunks = (phrase.strip() for line in lines for phrase in line.split("  "))

    text = " ".join(chunk for chunk in chunks if chunk)

    return text




# doc = '''
# <p></p>
# <p>Feed an email to the model and learn if it returns whitelisted values to loop through available models for a service</p>

# <p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/22">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDH2ZUWX3MLZDO3QCYJDSAKSSJANCNFSM4P4ZSINA">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH4F2DZZYVWXRBT23ELSAKSSJA5CNFSM4P4ZSINKYY3PNVWWK3TUL52HS4DFUVEXG43VMWVGG33NNVSW45C7NFSM4KDFS2UQ.gif" height="1" width="1" alt="" /></p>
# <script type="application/ld+json">[
# {
# "@context": "http://schema.org",
# "@type": "EmailMessage",
# "potentialAction": {
# "@type": "ViewAction",
# "target": "https://github.com/getmailscript/gpt3-api/issues/22",
# "url": "https://github.com/getmailscript/gpt3-api/issues/22",
# "name": "View Issue"
# },
# "description": "View this Issue on GitHub",
# "publisher": {
# "@type": "Organization",
# "name": "GitHub",
# "url": "https://github.com"
# }
# }
# ]</script>'''

# print(convert(doc))