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




doc = '''
<p></p>

<p>Barack Obama served as the 44th President of the United States from 2009=
 to 2017. Before his presidency, he served in the Illinois Senate (1997=E2=
=80=932004) and the United States Senate (2005=E2=80=932008).</p>

<p>It was during his campaign for the United States Senate that he first ma=
de a speech that received nationwide attention; he gave the keynote address=
 at the 2004 Democratic National Convention. <br>

<a target=3D"_blank" rel=3D"noopener noreferrer" href=3D"https://user-image=
s.githubusercontent.com/57938335/90669945-0ff2b400-e270-11ea-9383-e26ea19b2=
ab2.png"><img src=3D"https://user-images.githubusercontent.com/57938335/906=
69945-0ff2b400-e270-11ea-9383-e26ea19b2ab2.png" alt=3D"scissor" style=3D"ma=
x-width:100%;"></a></p>



<p style=3D"font-size:small;-webkit-text-size-adjust:none;color:#666;">&mda=
sh;<br />You are receiving this because you authored the thread.<br />Reply=
 to this email directly, <a href=3D"https://github.com/nikhilm21/Triallalal=
a/pull/1#issuecomment-676562480">view it on GitHub</a>, or <a href=3D"https=
://github.com/notifications/unsubscribe-auth/ALLZXMZBHADZQOPDNK23B2LSBQEGDA=
NCNFSM4QFFXMPA">unsubscribe</a>.<img src=3D"https://github.com/notification=
s/beacon/ALLZXM2LZTN5MNA5CFWDNTDSBQEGDA5CNFSM4QFFXMPKYY3PNVWWK3TUL52HS4DFVR=
EXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFBJYMMA.gif" height=3D"1" width=3D"1"=
 alt=3D"" /></p>

<script type=3D"application/ld+json">[

{

"@context": "http://schema.org",

"@type": "EmailMessage",

"potentialAction": {

"@type": "ViewAction",

"target": "https://github.com/nikhilm21/Triallalala/pull/1#issuecomment-676=
562480",

"url": "https://github.com/nikhilm21/Triallalala/pull/1#issuecomment-676562=
480",

"name": "View Pull Request"

},

"description": "View this Pull Request on GitHub",

"publisher": {

"@type": "Organization",

"name": "GitHub",

"url": "https://github.com"

}

}

]</script>
'''


if __name__ == '__main__':
    print(convert(doc))