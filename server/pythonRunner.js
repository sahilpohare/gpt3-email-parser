const { PythonShell } = require("python-shell");
const { extractDomain } = require("./utils");

class Parser{
    

}
function parseMail(subject = '', content = '', from = [{ address : 'notification@github.com'}],cb) {
   var data = { subject, content, from, domain: extractDomain(from[0].address),}

    const stringy = JSON.stringify(data);

    this.retval = {};
    callback.bind(this)
    PythonShell.run(
        './testing.py',
        {
           args: [
                '-b',
                stringy
            ]
        },
        (err, result) => {
            var verified = false;
            try {
                var res = JSON.parse(result);
                verified = true
            } catch{
                console.log('error @ openai');
                console.log(res);
                verified = false
            }
            cb(result[0],err,verified);
        }
    )
    return retval;
}

function callback(err, result){
    var verified = false;
    try {
        var res = JSON.parse(result);
        verified = true
    } catch{
        console.log('error @ openai');
        console.log(res);
        verified = false
    }
    console.log('hii')
    this.retval =  { err, result, verified}
}
module.exports = {
    parseMail
}