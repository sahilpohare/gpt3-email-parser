const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `Run failed for master (95d7442)

Repository: sahilpohare/testRepo
Workflow: node.js
Duration: 23.0 seconds
Finished: 2020-08-14 13:29:25 UTC

View results: https://github.com/sahilpohare/testRepo/actions/runs/208627599

Jobs:
  * build (10.x) failed (1 annotation)
  * build (12.x) failed (1 annotation)
  * build (14.x) cancelled (2 annotations)

-- 
You are receiving this because this workflow ran on your branch.
Manage your GitHub Actions notifications: https://github.com/settings/notifications`;
var jsonData = {
  from: [{ name: "Rahul Das", address: "notification@github.com" }],
  content: htmlData,
  contentType : 'text/html',
  subject: "rahul81 invited you to rahul81/GPT3parser",
};
let stringy = JSON.stringify(jsonData);

axios({
  url: "http://localhost:3200/parse",
  headers: {
    "Content-Type": "application/json",
  },
  data: stringy,
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => console.log(e.message));