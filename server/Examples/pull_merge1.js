htmlData = `
<p></p>
<p>Merged <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="675948262" data-permission-text="Title is private" data-url="https://github.com/nikhilm21/Movie-Recommender/issues/1" data-hovercard-type="pull_request" data-hovercard-url="/nikhilm21/Movie-Recommender/pull/1/hovercard" href="https://github.com/nikhilm21/Movie-Recommender/pull/1">#1</a> into master.</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/nikhilm21/Movie-Recommender/pull/1#event-3637673871">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDH4UQ6CR33XS4ZNDRALR76TRRANCNFSM4PZWKCSA">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH6PUAMPV2KY756BYP3R76TRRA5CNFSM4PZWKCSKYY3PNVWWK3TUL52HS4DFWZEXG43VMVCXMZLOORHG65DJMZUWGYLUNFXW5KTDN5WW2ZLOORPWSZGO3DJH7DY.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/nikhilm21/Movie-Recommender/pull/1#event-3637673871",
"url": "https://github.com/nikhilm21/Movie-Recommender/pull/1#event-3637673871",
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
    from: [{ name: "nikhilm21", address: "notifications@github.com"}],
    content: htmlData,
    contentType : 'text/html',
    subject: "Re: [nikhilm21/Movie-Recommender] Update README.md (#1)",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'pull',
      id: '1',
      issueName: 'Update README.md',
      activity: 'Merged #1 into master',
      org: 'nikhilm21',
      repo: 'Movie-Recommender',
      link: 'https://github.com/nikhilm21/Movie-Recommender/pull/1',
      from: 'github' },
   error: null }

module.exports = {output,expectedData}