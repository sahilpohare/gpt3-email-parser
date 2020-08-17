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
  res.send({ status: 'ok' });
});

app.post("/addDomain", (req, res) => {
  const collectionName = extractDomain(req.body.domaninName);
  console.log("post : " + domainName + ` timestamp : ${Date.now()}`);
  db.push(`/${collectionName.toLowerCase()}/data[]`, req.body);
  res.send({ status: 'ok' });
});

app.get("/getSamples/:orgname", (req, res) => {
  const collectionName = req.params["orgname"].toLowerCase();
  console.log(`get :  ${collectionName} timestamp : ${Date.now()}`);
  const data = db.getData(`/${collectionName}/`);
  res.json(data);
});

app.get("/getSubDomains/:domainName", (req, res) => {
  console.log(`get :  /subDomains timestamp : ${Date.now()}`);
  const data = db.getData(`/subdomains/${req.params['domainName']}`);
  res.json(data);
});

module.exports = {
  databaseRouter : app
}
