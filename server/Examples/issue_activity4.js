htmlData = `<p></p>
<p>Let's follow this format: <code>[unique]/[operation]</code></p>
<pre><code>eg.
POST: [timestamp]/[collectionNameInLowerCase]
GET:  [timestamp]/[collectionNameInLowerCase]
</code></pre>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you are subscribed to this thread.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/6#issuecomment-674859808">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/AN2BDH2AULOYMIDNQAZOZDLSBERCNANCNFSM4P3A66AA">unsubscribe</a>.<img src="https://github.com/notifications/beacon/AN2BDH4MVSPBPC7VVZE6GNLSBERCNA5CNFSM4P3A66AKYY3PNVWWK3TUL52HS4DFVREXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFA4YWIA.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/getmailscript/gpt3-api/issues/6#issuecomment-674859808",
"url": "https://github.com/getmailscript/gpt3-api/issues/6#issuecomment-674859808",
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
    from: [{ name: "Gorka Ludlow", address: "notifications@github.com"}],
    content: htmlData,
    contentType : 'text/html',
    subject: "Re: [getmailscript/gpt3-api] Provide a formal log for the process. (#6)",
  };

var output = JSON.stringify(jsonData)

var expectedData = {
 data:
    { type: 'pull',
      id: '6',
      issueName: 'Provide a formal log for the process.',
      activity:
       'Re: [getmailscript/gpt3-api] Provide a formal log for the process.',
      org: 'getmailscript',
      repo: 'gpt3-api',
      link: 'https://github.com/getmailscript/gpt3-api/pull/6',
      from: 'github' },
   error: null }

module.exports = {output,expectedData}