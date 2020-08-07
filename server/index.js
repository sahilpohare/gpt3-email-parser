const express = require('express');
const app = express();
const {PythonShell} = require('python-shell');
const bodyParser = require('body-parser');

const shell = new PythonShell('new_parser.py',{
    args : [
        '-i',
        'invite.html'
    ]
});

shell.on('message',(msg)=>{
    console.log(JSON.parse(msg));

})

shell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
});

app.use(bodyParser.json());

app.get('/parser',(req,res)=>{
    res.send('');
    req.body 
})

app.listen(3200,console.log('Jingling on 3000'))