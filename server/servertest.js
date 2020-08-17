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
// test('test parsing', async () => {
// var jsonData = {
// 	from: [ { name: 'Rahul Das', address: 'notification@github.com' } ],
// 	content: htmlData,
// 	subject: 'rahul81 invited you to rahul81/GPT3parser'
// };
// let stringy = JSON.stringify(jsonData);
// 	let res = await axios({
// 		url: 'http://localhost:3200/parse',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		data: stringy
// 	});
// 	expect(() => res.data[0]).toBe({
// 		Type: 'Invitation',
// 		invitor: 'rahul81',
// 		repo: 'GPT3parser',
// 		repolink: 'https://github.com/rahul81/GPT3parser',
// 		For: 'sahilpohare@gmail.com'
// 	});
// });
