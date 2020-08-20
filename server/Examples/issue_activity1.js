htmlData = `<p></p>
<p>Closed <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="676869732" data-permission-text="Title is private" data-url="https://github.com/getmailscript/gpt3-api/issues/4" data-hovercard-type="issue" data-hovercard-url="/getmailscript/gpt3-api/issues/4/hovercard" href="https://github.com/getmailscript/gpt3-api/issues/4">#4</a>.</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/4#event-3652191008">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDHZQUIWU3SAHG2VIDHDSAPWFJANCNFSM4P3A5JSA">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH64IYXGYP5C6KG2XE3SAPWFJA5CNFSM4P3A5JSKYY3PNVWWK3TUL52HS4DFWZEXG43VMVCXMZLOORHG65DJMZUWGYLUNFXW5KTDN5WW2ZLOORPWSZGO3GYAGIA.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/issues/4#event-3652191008",
"url": "https://github.com/getmailscript/gpt3-api/issues/4#event-3652191008",
"name": "View Issue"
},
"description": "View this Issue on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>`

var jsonData = {
    from: [{ name: "nikhilm21", address: "notifications@github.com"}],
    content: htmlData,
    contentType : 'text/html',
    subject: "Re: [getmailscript/gpt3-api] Set configuration values into config or env (#4)",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'issues',
      issueId: '4',
      issueName: 'Set configuration values into config or env',
      action: 'Closed',
      org: 'getmailscript',
      repo: 'gpt3-api',
      link:"https://github.com/getmailscript/gpt3-api/issues/4",
      from: 'github' },
   error: null }

module.exports = {output,expectedData}
