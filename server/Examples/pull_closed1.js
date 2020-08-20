htmlData = `
<p></p>
<p>Closed <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="681999747" data-permission-text="Title is private" data-url="https://github.com/nikhilm21/Movie-Recommender/issues/2" data-hovercard-type="pull_request" data-hovercard-url="/nikhilm21/Movie-Recommender/pull/2/hovercard" href="https://github.com/nikhilm21/Movie-Recommender/pull/2">#2</a>.</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/nikhilm21/Movie-Recommender/pull/2#event-3671849256">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDH4MKA24N6EYHO3V25TSBQCATANCNFSM4QFE6CNQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH77XXCKMXNIY34VPHTSBQCATA5CNFSM4QFE6CN2YY3PNVWWK3TUL52HS4DFWZEXG43VMVCXMZLOORHG65DJMZUWGYLUNFXW5KTDN5WW2ZLOORPWSZGO3LN7SKA.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/nikhilm21/Movie-Recommender/pull/2#event-3671849256",
"url": "https://github.com/nikhilm21/Movie-Recommender/pull/2#event-3671849256",
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
    subject: "Re: [nikhilm21/Movie-Recommender] Made some changes to the files (#2)",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'pull',
      id: '2',
      issueName: 'Made some changes to the files',
      activity: 'Closed #2',
      org: 'nikhilm21',
      repo: 'Movie-Recommender',
      link: 'https://github.com/nikhilm21/Movie-Recommender/pull/2',
      from: 'github' },
   error: null }

module.exports = {output,expectedData}