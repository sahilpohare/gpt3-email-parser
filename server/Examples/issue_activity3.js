htmlData = `
<p></p>
<p>pipenv environment set with python code formatted with black</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/14#issuecomment-674123123">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDH7WE2ULYOHYBOJ7I6TSAVIFPANCNFSM4P3BGT3A">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH3DSDO7435PR4JJUX3SAVIFPA5CNFSM4P3BGT3KYY3PNVWWK3TUL52HS4DFVREXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFAXE24Y.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/issues/14#issuecomment-674123123",
"url": "https://github.com/getmailscript/gpt3-api/issues/14#issuecomment-674123123",
"name": "View Issue"
},
"description": "View this Issue on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>
`;

var jsonData = {
    from: [{ name: "Rahul Das", address: "notifications@github.com"}],
    content: htmlData,
    contentType : 'text/html',
    subject: "Re: [getmailscript/gpt3-api] Ensure code environment via pipenv and add code format via black (#14)",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'issues',
      issueId: '14',
      issueName:
       'Ensure code environment via pipenv and add code format via black',
      action: 'comment',
      comment:
       'pipenv environment set with python code formatted with black',
      org: 'getmailscript',
      repo: 'gpt3-api',
      link:"https://github.com/getmailscript/gpt3-api/issues/14",
      from: 'github'},
   error: null }

module.exports = {output,expectedData}