const app = require('express')();
const { JsonDB } = require('node-json-db');

        },
        answer : {

        }
    }
*/
app.post('/addSample', (req, res) => {
	const collectionName = extractDomain(req.body.prompt.from[0].address);
	db.push(`/${collectionName.toLowerCase()}/data[]`, req.body);
	res.send('GREAT');
});

app.get('/getSamples/:orgname', (req, res) => {
	const collectionName = req.params['orgname'].toLowerCase();
    const data = db.getData(`/${collectionName}/data`);
    res.json(data);
});

app.listen(4001, console.log('Data Jingle at 4001'));
