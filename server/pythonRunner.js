const { PythonShell } = require("python-shell");
const { extractDomain } = require("./utils");

async function parseMail(subject = '', content = '', from = []) {
    var fullContent = { subject, content, from, domain: extractDomain(from[0].address),}

    const stringy = JSON.stringify(fullContent);
    await PythonShell.run(
        './bin/new_parser.py',
        {
            args: [
                '-b',
                stringy
            ]
        },
        (err, result) => {
            var verified = false;
            try {
                var res = JSON.parse(result[0]);
                verified = true
            } catch{
                console.log('error @ openai');
                console.log(res);
                verified = false
            }
            return { err, result: res, verified }
        }
    )
}

module.exports = {
    parseMail
}