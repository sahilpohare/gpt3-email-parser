const app = require('express')();
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = new JsonDB(new Config('./db/mailTrain', true, true, '/'));

var extractDomain = (addr) => addr.split('@')[1].split('.')[0];
/*
    {
        prompt : {

        },
        answer : {

        }
    }
*/
app.post('/addSample', (req, res) => {
    const collectionName = extractDomain(req.body.prompt.from[0].address);
    console.log('post : ' + collectionName);
	db.push(`/${collectionName.toLowerCase()}/data[]`, req.body);
	res.send('GREAT');
});

app.get('/getSamples/:orgname', (req, res) => {
    const collectionName = req.params['orgname'].toLowerCase();
    console.log('get : ' + collectionName);
    const data = db.getData(`/${collectionName}/data`);
    res.json(data);
});

app.listen(4001, console.log('Data Jingle at 4001'));
