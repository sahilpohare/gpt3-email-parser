htmlData=`<p></p>
<p>Bro what is this?</p>

<p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you authored the thread.<br />Reply to this email directly, <a href="https://github.com/nikhilm21/Movie-Recommender/pull/2#issuecomment-676547987">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/ALLZXM575E3PXU7IC37NUXLSBQA3TANCNFSM4QFE6CNQ">unsubscribe</a>.<img src="https://github.com/notifications/beacon/ALLZXM5T253LISAO4PWIXFDSBQA3TA5CNFSM4QFE6CN2YY3PNVWWK3TUL52HS4DFVREXG43VMVBW63LNMVXHJKTDN5WW2ZLOORPWSZGOFBJU3EY.gif" height="1" width="1" alt="" /></p>
<script type="application/ld+json">[
{
"@context": "http://schema.org",
"@type": "EmailMessage",
"potentialAction": {
"@type": "ViewAction",
"target": "https://github.com/nikhilm21/Movie-Recommender/pull/2#issuecomment-676547987",
"url": "https://github.com/nikhilm21/Movie-Recommender/pull/2#issuecomment-676547987",
"name": "View Pull Request"
},
"description": "View this Pull Request on GitHub",
"publisher": {
"@type": "Organization",
"name": "GitHub",
"url": "https://github.com"
}
}
]</script>`


var jsonData = {
    from: [{ name: "GitHub", address: "noreply@github.com"}],
    content: htmlData,
    contentType : 'text/html',
    subject: "Re: [nikhilm21/Movie-Recommender] Made some changes to the files (#2)",
  };
  
  var output = JSON.stringify(jsonData)
  
  var expectedData = { data:
    { type: 'Auth',
      name: 'nikhilm21',
      application: 'GitKraken',
      link:
       'https://github.com/settings/connections/applications/a7557949433b7d282a76',
      from: 'github' },
   error: null }
  
  module.exports = {output,expectedData}