const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `Rahul D added you to the card New stuff to do (https://trello.com/c/vMi1kXIz/2-new-stuff-to-do) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3dz5ivlpuxg3mbrx+03uafftupp@`;

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

