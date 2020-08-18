const { PythonShell } = require("python-shell");
const Promise = require("bluebird");

const asyncparser = (data) => new Promise((resolve, reject) => {
  const stringy = JSON.stringify(data);
  PythonShell.run(
    "./bin/new_parser.py",
    {
      args: ["-b", stringy],
    },
    function (err, result) {
      if (!err && result && result.length > 0) {
        try {
          var res = JSON.parse(result[0]);
          resolve(res, err);
        } catch (e){
          console.log("error");
          console.log(res);
          reject(e);
        }
      }else{
        reject(err);
      }
    }
  );
});

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
  asyncparser
};
