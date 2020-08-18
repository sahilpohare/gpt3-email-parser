const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `Gorka Ludlow commented on the card Transfer ownership of the extension repo to MailScript (https://trello.com/c/m5VdVSGd/13-transfer-ownership-of-the-extension-repo-to-mailscript) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

"You will continue to have write access, but the repo should be part of the MailScript org."

Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvijf2y87uf4qv1z5+06px1dmp90@`;

var jsonData = {
  from: [{ name: "Rahul Das", address: "notification@trello.com" }],
  content: htmlData,
  contentType : 'text/plain',
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

