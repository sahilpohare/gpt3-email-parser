const app = require("express").Router();
const { JsonDB } = require("node-json-db");
const { Config } = require("node-json-db/dist/lib/JsonDBConfig");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

const db = new JsonDB(new Config("./db/mailTrain", true, true, "/"));

var extractDomain = (addr) => addr.split("@")[1].split(".")[0];

app.post("/addSample", (req, res) => {
  const collectionName = extractDomain(req.body.prompt.from[0].address);
  console.log("post : " + collectionName + ` timestamp : ${Date.now()}`);
  db.push(`/${collectionName.toLowerCase()}/data[]`, req.body);
  res.send({ status: "ok" });
});

app.post("/addDomain", (req, datares) => {
  const collectionName = extractDomain(req.body.domaninName);
  console.log("post : " + domainName + ` timestamp : ${Date.now()}`);
  db.push(`/subdomains.${req.body.domain}`, req.body.subdomains);
  res.send({ status: "ok" });
});

module.exports = {
  databaseRouter: app,
};
