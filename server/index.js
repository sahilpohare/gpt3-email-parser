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
  res.header('Content-Type', 'application/json');
  parseMail(
    req.body.subject,
    req.body.content,
    req.body.from,
    (result, err, verified) => {
      if (!err || verified) {
        console.log(result)
        console.log('success')
        res.send(result)
      } else {
        console.log('error')
        console.log(err.message);
        res.send(result)
        console.log(result)
      }
    }
  );
  console.log(data)

});

app.listen(
  process.env.PORT || 3200,
  console.log(`Server listening on port : ${process.env.PORT || 3200}`)
);
