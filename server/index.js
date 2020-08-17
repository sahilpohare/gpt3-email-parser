const express = require("express");
const app = express();
const { PythonShell } = require("python-shell");
const bodyParser = require("body-parser");
const axios = require("axios").default;
const cors = require("cors");
const { parser } = require("./pythonRunner");
const { router } = require("./custom_routes/trello");
const { databaseRouter } = require("./database");

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded(), bodyParser.json());

var extractDomain = (addr) => addr.split("@")[1].split(".")[0];
app.use("/database", databaseRouter);
app.get("/", (req, res) => res.send("Mail Parse"));
app.use("./custom_routes", router);
app.post("/addSample", (req, res) => {
  const timestamp = Date.now();
  console.log("post : /addSample timestamp : " + timestamp);
  axios({
    url: `${process.env.DATABASE_URL}/addSample`,
    headers: {
      "Content-Type": "application/json",
    },
    data: req.data,
  }).catch((e) =>
    console.log("failed post : /addSample timestamp: " + timestamp)
  );
});

app.get("/parse", async (req, res) => {
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
    if (!err || verified) {
      console.log(result[0]);
      console.log("success get : /parse timestamp : " + timestamp, "\n", err);
      res.send(result[0]);
    } else {
      console.log("failed get : /parse timestamp : " + timestamp, "\n", err);
      res.send("error");
    }
  });
});

app.listen(
  process.env.PORT || 3200,
  console.log(`Server listening on port : ${process.env.PORT || 3200}`)
);
