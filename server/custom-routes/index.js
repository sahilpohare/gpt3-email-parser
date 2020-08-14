function trello(parser) {
	return function(req, res) {
		par = data.split(/boards.trello.com|on Trello|--/);
		result = par.slice(1, par.length - 2).map((val) => {
			let { err, result } = parser(val);
			if (err) {
				return error;
			} else {
				return res;
			}
		});
		res.send(result);
	};
}

module.exports = {
	trello
}