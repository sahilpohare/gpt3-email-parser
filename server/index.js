const express = require('express');
const app = express();
const {PythonShell} = require('python-shell');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded(),bodyParser.json());

app.get('/',(req,res)=>res.send('Mail Parse'))

app.post('/addSample',(req,res)=>{
    
});

app.get('/parse',async (req,res)=>{
    const timestamp = Date.now()
    console.log('get : /parse timestamp : ' + timestamp);
    let stringy = JSON.stringify(req.body)
    PythonShell.run('./new_parser.py',{
        args : [
            '-b',
             stringy
        ],
    }, (err, result) =>{
        if(!err){
            res.header('Content-Type','application/json');
            result = result.map(val=>JSON.parse(val));
            res.send(JSON.stringify(result));
            return
        }
        console.log('failed get : /parse timestamp : ' + timestamp, '\n',err);
        res.send('error');
    });
    
})

app.listen(3200,console.log('Jingling on 3200'))