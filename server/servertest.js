const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `<p></p>
<p><a class="commit-link" data-hovercard-type="commit" data-hovercard-url="https://github.com/getmailscript/gpt3-api/commit/a6d176552839b5c856b4478336fe411972c66872/hovercard" href="https://github.com/getmailscript/gpt3-api/commit/a6d176552839b5c856b4478336fe411972c66872"><tt>a6d1765</tt></a></p>
<p>whitelist checking working</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/22#issuecomment-674128660">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDHYXQRXM3UCQYXDKJBDSAVJRTANCNFSM4P4ZSINA">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDHZ5HYBEXH3BC5HICUDSAVJRTA5CNFSM4P4ZSINKYY3PNVWWK3TUL52HS4DFVREXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFAXGGFA.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/issues/22#issuecomment-674128660",
"url": "https://github.com/getmailscript/gpt3-api/issues/22#issuecomment-674128660",
"name": "View Issue"
},
"description": "View this Issue on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>`;

var jsonData = {
  from: [{ name: "Rahul Das", address: "notification@github.com" }],
  content: htmlData,
  contentType : 'text/html',
  subject: "Re: [getmailscript/gpt3-api] Experiment with more than one model for a template to prevent limitations (#22)",
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

