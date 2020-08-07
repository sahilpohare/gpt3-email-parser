const express = require('express');
const app = express();
const {PythonShell} = require('python-shell');

const shell = new PythonShell('./test.py');

shell.on('message',(msg)=>{
    console.log(msg);
})

shell.end(function (err,code,signal) {
    if (err) throw err;
  
});

app.get('/',(req,res)=>{
    res.send('FUCK YEAH');
})

app.listen(3000,console.log('Jingling on 3000'))