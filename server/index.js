const express = require('express');
const app = express();
const { PythonShell } = require('python-shell');
const bodyParser = require('body-parser');
const axios = require('axios').default;
require('dotenv').config();

app.use(bodyParser.urlencoded(), bodyParser.json());

app.get('/', (req, res) => res.send('Mail Parse'));

app.post('/addSample', (req, res) => {
    const timestamp = Date.now();
    console.log('post : /addSample timestamp : ' + timestamp);
    axios({
        url : `${process.env.DATABASE_URL}/addSample`,
        headers : {
            'Content-Type' : 'application/json'
        },
        data : req.data
    }).catch(e=>console.log('failed post : /addSample timestamp: ' + timestamp))
});

app.get('/parse', async (req, res) => {
	const timestamp = Date.now();
	console.log('get : /parse timestamp : ' + timestamp);
	let stringy = JSON.stringify(req.body);
	PythonShell.run(
		'./new_parser.py',
		{
			args: [ '-b', stringy ]
		},
		(err, result) => {
			if (!err) {
				res.header('Content-Type', 'application/json');
				result = result.map((val) => JSON.parse(val));
				res.send(JSON.stringify(result));
				return;
			}
			console.log('failed get : /parse timestamp : ' + timestamp, '\n', err);
			res.send('error');
		}
	);
});

app.listen(process.env.PORT || 3200, console.log(`Data Jingle at ${process.env.PORT || 3200}`));
