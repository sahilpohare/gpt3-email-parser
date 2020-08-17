const { PythonShell } = require("python-shell");

function parser(data,cb) {
    
    
    const stringy = JSON.stringify(data);
    
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

module.exports = {
    parser
}