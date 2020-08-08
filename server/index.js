const express = require('express');
const app = express();
const {PythonShell} = require('python-shell');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded(),bodyParser.json());

app.get('/',(req,res)=>res.send('Mail Parse'))

app.get('/parse',async (req,res)=>{
    try {
        await PythonShell.run('./new_parser.py',{
            args : [
                '-b',
                JSON.stringify(req.body)
            ],
        }, (err, result) =>{
            res.json(JSON.parse(result));
        });
    } catch (e){
        console.log(e);
    }
})

app.listen(3200,console.log('Jingling on 3200'))