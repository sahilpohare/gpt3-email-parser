const { extractDomain } = require("../../utils");
const { parser } = require("../../pythonRunner");
const router = require("express").Router();

router.get("/trello", async (req, res) => {
  console.log("get: /custom_routes/trello ");
  let par = req.body.content.split(/boards.trello.com|on Trello|--/);
  let domain = extractDomain(req.body.from[0].address);
  let ret = [];
  let result = par.slice(1, par.length - 2);
  for (let i = 0; i < result.length; i++) {
    console.log("loop no :" + i);
    parser(
      { ...req.body, content: result[i], domain: domain },
      (res, err, verfied) => {
        if(verfied){
            ret.push(result);
        }else{
            ret.push('err');
        }
        console.log(result);
      }
    );
  }
  res.send({ data: ret });
});

module.exports = {
  router,
};
