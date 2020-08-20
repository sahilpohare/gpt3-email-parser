htmlData = `<p></p>
<p>Closed <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="676870014" data-permission-text="Title is private" data-url="https://github.com/getmailscript/gpt3-api/issues/5" data-hovercard-type="issue" data-hovercard-url="/getmailscript/gpt3-api/issues/5/hovercard" href="https://github.com/getmailscript/gpt3-api/issues/5">#5</a>.</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/5#event-3652168498">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDHZD25LFEXSFNLTFCKLSAPVS3ANCNFSM4P3A5WXQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDHYXCCAPV2OR4JUMHHTSAPVS3A5CNFSM4P3A5WX2YY3PNVWWK3TUL52HS4DFWZEXG43VMVCXMZLOORHG65DJMZUWGYLUNFXW5KTDN5WW2ZLOORPWSZGO3GX2WMQ.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/issues/5#event-3652168498",
"url": "https://github.com/getmailscript/gpt3-api/issues/5#event-3652168498",
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
    subject: "Re: [getmailscript/gpt3-api] Move api key into env (#5)",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'issues',
      issueId: '5',
      issueName: 'Move api key into env',
      action: 'Closed',
      org: 'getmailscript',
      repo: 'gpt3-api',
      link:"https://github.com/getmailscript/gpt3-api/issues/5",
      from: 'github' },
   error: null }

module.exports = {output,expectedData}
