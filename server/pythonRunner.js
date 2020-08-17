const { PythonShell } = require("python-shell");
const { extractDomain } = require("./utils");

function parseMail(subject = '', content = '', from = []) {
    var data = { subject, content, from }
    const stringy = JSON.stringify(data);

    let data = Object.assign(data, {
        domain: extractDomain(from[0].address),
    });

    PythonShell.run(
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