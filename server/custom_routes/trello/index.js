const {extractDomain} = require('../../utils');
const {parser} = require('../../pythonRunner');
const router = require('express').Router();

router.get('/trello',trello);

function trello() {
	return function(req, res) {
        let par = req.body.content.split(/boards.trello.com|on Trello|--/);
        let domain = extractDomain(req.body.from[0].address);
        let ret = []
		result = par.slice(1, par.length - 2).forEach(element => {
            parser({...req.body, content : element, domain : domain}, (res, err, verfied) => {
                ret.push(result);
            })
        });
        console.log(ret)
		res.send({data : ret});
	};
}

module.exports = {
    trello,
    router
}