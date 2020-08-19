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




# doc = '''<p></p>
# <p>Can we double-check the whole codebase? See here: <a href="https://github.com/getmailscript/gpt3-api/blob/master/server/servertest.js#L41">https://github.com/getmailscript/gpt3-api/blob/master/server/servertest.js#L41</a></p>

# <p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you commented.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/7#issuecomment-674879749">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/ALLZXMYDNQHZIVKTDFAMZH3SBEVTXANCNFSM4P3A74MQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/ALLZXM7LBAXG3W2VIK5ZTJDSBEVTXA5CNFSM4P3A74M2YY3PNVWWK3TUL52HS4DFVREXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFA45SBI.gif" height="1" width="1" alt="" /></p>
# <script type="application/ld+json">[
# {
# "@context": "http://schema.org",
# "@type": "EmailMessage",
# "potentialAction": {
# "@type": "ViewAction",
# "target": "https://github.com/getmailscript/gpt3-api/issues/7#issuecomment-674879749",
# "url": "https://github.com/getmailscript/gpt3-api/issues/7#issuecomment-674879749",
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