const express = require('express');
const app = express();
const {PythonShell} = require('python-shell');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded(),bodyParser.json());

app.get('/',(req,res)=>res.send('Mail Parse'))

app.get('/parse',async (req,res)=>{
    let stringy = JSON.stringify(req.body)
    PythonShell.run('./new_parser.py',{
        args : [
            '-b',
             stringy
        ],
    }, (err, result) =>{
        console.log(result);
        res.send(result);
    });
    
})

app.listen(3200,console.log('Jingling on 3200'))