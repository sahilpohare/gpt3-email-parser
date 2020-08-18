const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `<h4>You can view, comment on, or merge this pull request online at:</h4>
<p>&nbsp;&nbsp;<a href='https://github.com/getmailscript/gpt3-api/pull/24'>https://github.com/getmailscript/gpt3-api/pull/24</a></p>

<h4>Commit Summary</h4>
<ul>
  <li>trello update</li>
</ul>

<h4>File Changes</h4>
<ul>
  <li>
    <strong>D</strong>
    <a href="https://github.com/getmailscript/gpt3-api/pull/24/files#diff-605d1089679ea4379fd47b97e9a8d02a">server/train_html/verify_email.html</a>
    (2663)
  </li>
</ul>

<h4>Patch Links:</h4>
<ul>
  <li><a href='https://github.com/getmailscript/gpt3-api/pull/24.patch'>https://github.com/getmailscript/gpt3-api/pull/24.patch</a></li>
  <li><a href='https://github.com/getmailscript/gpt3-api/pull/24.diff'>https://github.com/getmailscript/gpt3-api/pull/24.diff</a></li>
</ul>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/pull/24">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AAXODSV6DDXO33VYU7HTOSDSBEU4LANCNFSM4QBUNV3Q">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AAXODSRISM35AUED3E2LYMDSBEU4LA5CNFSM4QBUNV32YY3PNVWWK3TUL52HS4DFUVEXG43VMWVGG33NNVSW45C7NFSM4KELPMJA.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/pull/24",
"url": "https://github.com/getmailscript/gpt3-api/pull/24",
"name": "View Pull Request"
},
"description": "View this Pull Request on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>
`;

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

