const { PythonShell } = require("python-shell");

function parser(data,cb) {
    
    
    const stringy = JSON.stringify(data);
    
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
            console.log(result)
            cb(result,err,verified);
        }
    )
}

module.exports = {
    parser
}