const { asyncForEach, extractDomain } = require("../utils");
const { parser, asyncparser } = require("../pythonRunner");
const cheerio = require('cheerio');
const router = require("express").Router();

router.post("/trello", async (req, res) => {
  console.log("get: /custom_routes/trello ");
  let par = req.body.content.split(/boards.trello.com|on Trello|--/);
  let domain = extractDomain(req.body.from[0].address);
  let ret = [];
  let result = par.slice(1, par.length - 2);
  result = result.map((val) => ({
    content: val,
    domain: domain,
    subject:"2 new notifications on GPT3Parser since 5:07 PM (August 13, 2020)",
    contentType: "text/plain",
  }));

  Promise.all(
    result.map(async (element) => {
      let result;
      try {
        result = await asyncparser(element);
      } catch (e) {
        result = e;
      }
      console.log(result);
      return result;
    })
  )
    .then((retval) => {
      res.send({ notifications: retval });
    })
    .catch((e) => {
      res.send(e);
    });
});

router.post("/github_pull_req", (req, res) => {
  const $ = cheerio.load(req.body.content);
  $("script").remove();
  $("styles").remove();
  let text = $("body").text();
  let data = text.split('\n').map(v=>v.trim()).filter(v => v != '').join('\n').split(/Commit Summary\n|File Changes\n|Patch Links/);

  data = {
    content: data,
    domain: domain,
    contentType: "text/plain",
  }

  try{
    let response = asyncparser(data)
    res.send(response);
  } catch (e){
    res.send({status : 'error'})
  }
});

module.exports = {
  router,
};