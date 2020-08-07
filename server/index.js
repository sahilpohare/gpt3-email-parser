const express = require('express');
const app = express();
const {PythonShell} = require('python-shell');
const bodyParser = require('body-parser');

// const shell = new PythonShell('new_parser.py',{
//     args : [
//         '-i',
//         'invite.html'
//     ]
// });

// shell.on('message',(msg)=>{
//     console.log(JSON.parse(msg));

// })

// shell.end(function (err,code,signal) {
//     if (err) throw err;
//     console.log('The exit code was: ' + code);
//     console.log('The exit signal was: ' + signal);
//     console.log('finished');
// });

app.use(bodyParser.urlencoded(),bodyParser.json());

app.get('/',(req,res)=>res.send('Mail Parse'))

app.get('/parser',async (req,res)=>{
    try {
        await PythonShell.run('./new_parser.py',{
            args : [
                '-b',
                req.body.content
            ],
        }, (err, result) =>{
            res.json(JSON.parse(result));
        });
    } catch (e){
        console.log(e);
    }
})

app.listen(3200,console.log('Jingling on 3200'))