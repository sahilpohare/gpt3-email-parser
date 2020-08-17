const { PythonShell } = require("python-shell");

function parser(data, cb) {
  const stringy = JSON.stringify(data);
  var res = [];

  PythonShell.run(
    "./bin/new_parser.py",
    {
      args: ["-b", stringy],
    },
    function (err, result) {
      res = result;
      var verified = false;
      try {
        var res = JSON.parse(result[0]);
        verified = true;
      } catch {
        console.log("error @ openai");
        console.log(res);
        verified = false;
      }
      console.log(result);
      cb(result, err, verified);
    }
  );
  return res;
}

module.exports = {
  parser,
};
