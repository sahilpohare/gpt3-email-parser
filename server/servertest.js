const { json } = require("body-parser");

const axios = require("axios").default;

const htmlData = `
<p></p>
<p>Comments have been removed except for the test files. Will remove those as while refactoring.</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/7#issuecomment-674111600">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDH6XNWPFFN6CMPGDTBDSAVFKXANCNFSM4P3A74MQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH7S3DZSJJJTAPRGNXTSAVFKXA5CNFSM4P3A74M2YY3PNVWWK3TUL52HS4DFVREXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFAXCA4A.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/issues/7#issuecomment-674111600",
"url": "https://github.com/getmailscript/gpt3-api/issues/7#issuecomment-674111600",
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
  subject: "[getmailscript/gpt3-api] Experiment with more than one model for a template to prevent limitations (#22)",
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

