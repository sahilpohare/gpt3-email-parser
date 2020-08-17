const express = require("express");
const app = express();
const { PythonShell } = require("python-shell");
const bodyParser = require("body-parser");
const axios = require("axios").default;
const cors = require("cors");
const { parseMail } = require("./pythonRunner");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded(), bodyParser.json());

var extractDomain = (addr) => addr.split("@")[1].split(".")[0];

app.get("/", (req, res) => res.send("Mail Parse"));

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

  let {err, result, verified} = parseMail(req.body.subject, req.body.content, req.body.from);

  if(verified || !err){
    console.log(result);
    res.header('Content-Type','application/json');
    res.send(JSON.stringify(result))
  }else{
    console.log(err);
    console.log("failed get : /parse timestamp : " + timestamp, "\n", err);
    res.send("error");
  }
});

app.listen(
  process.env.PORT || 3200,
  console.log(`Server listening on port : ${process.env.PORT || 3200}`)
);
