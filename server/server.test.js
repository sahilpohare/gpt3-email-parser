const { default: Axios } = require("axios");
const { expect, assert } = require("chai");

const server = require('./index');
const chaiHttp = require('chai-http');

const mails = require("./testExamples");
const _ = require("lodash");
const { iteratee } = require("lodash");
const should = chai.should()

chai.use(chaiHttp)

function ForgeTest(testName, mail, metaData, shouldEqlObj, url = '/parse'){
  it(testName,(done) => {
    let reqData = Object.assign(metaData,{ content : mail});
    chai.request(server)
    .get(url)
    .set('Content-Type','application/json')
    .send(reqData)
    .end((err, res)=>{
      expect(res.data).to.eql(shouldEqlObj);
      done(); 
    })
  
  })
}

describe('Github Tests', () => {
})

async function forgeTest(testName, mail, metaData, shouldEqlObj) {
  console.log("running test " + testName);
  reqData = Object.assign({ content: mail });
  let stringy = JSON.stringify(metaData);
  const res = await Axios({
    url: "http://localhost:3200/parse",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    data: stringy,
  });
  console.log('expected : ' + JSON.stringify(shouldEqlObj,null,2));
  console.log('output : ' + JSON.stringify(res.data,null,2));
  expect(res.data).to.not.eql(shouldEqlObj, "passed :" + testName);
}

var jsonData = {
  from: [{ name: "Rahul Das", address: "notification@github.com" }],
  content: mails.invitationMail,
  contentType: "text/html",
  subject: "rahul81 invited you to rahul81/GPT3parser",
};

forgeTest(
  "testing github invite",
  mails.invitationMail,
  {
    from: [{ name: "Rahul Das", address: "notification@github.com" }],
    content: mails.invitationMail,
    contentType: "text/html",
    subject: "rahul81 invited you to rahul81/GPT3parser",
  },
  {
    data: {
      type: "Invitation",
      invitor: "rahul81",
      repo: "GPT3parser",
      repoLink: "https://github.com/rahul81/GPT3parser",
      for: "nkmishra0103@gmail.com",
      from: "github",
      org: "rahul81",
    },
    error: null,
  }
);
