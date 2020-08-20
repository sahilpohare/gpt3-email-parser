htmlData = `
<p></p>
<p>Closed <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="676040232" data-permission-text="Title is private" data-url="https://github.com/rahul81/Market_Analysis/issues/1" data-hovercard-type="pull_request" data-hovercard-url="/rahul81/Market_Analysis/pull/1/hovercard" href="https://github.com/rahul81/Market_Analysis/pull/1">#1</a>.</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you authored the thread.<br />Reply to this email directly, <a href="https://github.com/rahul81/Market_Analysis/pull/1#event-3641929103">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDHYS763NUKQBY4VHXMLSAD25FANCNFSM4PZ2MGLQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH5DGRQQ6EDXDGZAH63SAD25FA5CNFSM4PZ2MGL2YY3PNVWWK3TUL52HS4DFWZEXG43VMVCXMZLOORHG65DJMZUWGYLUNFXW5KTDN5WW2ZLOORPWSZGO3EJW3DY.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/rahul81/Market_Analysis/pull/1#event-3641929103",
"url": "https://github.com/rahul81/Market_Analysis/pull/1#event-3641929103",
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
    from: [{ name: "Rahul Das", address: "notifications@github.com"}],
    content: htmlData,
    contentType : 'text/html',
    subject: "Re: [rahul81/Market_Analysis] Create README.md (#1)",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'issues',
      id: '1',
      issueName: 'Added missing dependencies',
      action: 'Closed',
      org: 'nikhilm21',
      repo: 'Movie-Recommender',
      link: 'https://github.com/nikhilm21/Movie-Recommender/issues/1',
      from: 'github' },
   error: null }

module.exports = {output,expectedData}