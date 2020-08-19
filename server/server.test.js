const { default: Axios } = require("axios");
const {expect, assert} = require("chai");
const mails = require("./testExamples");
const _ = require('lodash')


async function forgeTest(testName,mail, metaData, shouldEql) {
  console.log('running test '+ testName);
  metaData = Object.assign({ content: mail });
  let stringy = JSON.stringify(metaData);
  Axios({
    url: "http://localhost:3200/parse",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: stringfy,
  }).then((res) => {
    expect(res.data).to.not.eql({
      data: {
        type: 'Invitation',
        invitor: 'rahul81',
        repo: 'GPT3parser',
        repoLink: 'https://github.com/rahul81/GPT3parser',
        for: 'nkmishra0103@gmail.com',
        from: 'github',
        org: 'rahul81'
      },
      error: null
    },'passed :' + testName)
  });
}

var jsonData = {
  from: [{ name: "Rahul Das", address: "notification@github.com" }],
  content: mails.invitationMail,
  contentType: "text/html",
  subject: "rahul81 invited you to rahul81/GPT3parser",
};

let strinagy = JSON.stringify(jsonData);

forgeTest('trelloTest',
)