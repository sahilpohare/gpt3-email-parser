const { asyncForEach, extractDomain } = require("../../utils");
const { parser, asyncparser } = require("../../pythonRunner");
const router = require("express").Router();

router.get("/trello", async (req, res) => {
  console.log("get: /custom_routes/trello ");
  let par = req.body.content.split(/boards.trello.com|on Trello|--/);
  let domain = extractDomain(req.body.from[0].address);
  let ret = [];
  let result = par.slice(1, par.length - 2);
  result = result.map((val) => ({
    content: val,
    domain: domain,
    contentType: "text/plain",
  }));
  
  // asyncForEach(result,async (val,_,_)=>{
  //     let result;
  //     try {
  //       result = await asyncparser(element);
  //     } catch (e) {
  //       result = e;
  //     }
  //     ret.push(result);
  //   }
  // ).then(val => {
  //   res.send(val);
  // }
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
  .catch(e=>{
    res.send(e);
  })
});

module.exports = {
  router,
};
