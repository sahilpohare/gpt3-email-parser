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
