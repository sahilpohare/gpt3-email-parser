const express = require("express");
const app = express();
const { PythonShell } = require("python-shell");
const bodyParser = require("body-parser");
const axios = require("axios").default;
const cors = require("cors");
const { parser } = require("./pythonRunner");
const { router } = require("./custom_routes/index.js");
const { databaseRouter } = require("./database");
var extractDomain = (addr) => addr.split("@")[1].split(".")[0];

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded(), bodyParser.json());

app.get("/", (req, res) => res.send("Mail Parse"));
app.use("/custom_routes", router);

app.use("/database", databaseRouter);

app.post("/parse", async (req, res) => {
  const timestamp = Date.now();
  console.log("get : /parse timestamp : " + timestamp);
  res.header("Content-Type", "application/json");

  var data = {
    ...req.body,
    domain: extractDomain(req.body.from[0].address),
    content: req.body.content,
    contentType: req.body.contentType,
  };

  parser(data, (result, err, verified) => {
    if (!err && verified && result.length > 0) {
      console.log(result[0]);
      console.log("success get : /parse timestamp : " + timestamp, "\n", err);
      res.send(result[0]);
    } else {
      console.log("failed get : /parse timestamp : " + timestamp, "\n", err);
      res.send({});
    }
  });
});

module.exports = app.listen(
  process.env.PORT || 3200,
  console.log(`Server listening on port : ${process.env.PORT || 3200}`)
);
