function trello(parser) {
	return function(req, res) {
		par = req.body.content.split(/boards.trello.com|on Trello|--/);
		result = par.slice(1, par.length - 2).map(val => ({ content : val, from : [{address : 'sahilpohare@gmail.com', name : 'sahil'}], subject : 'trello'}))
		res.send(result);
	};
}

module.exports = {
	trello
}