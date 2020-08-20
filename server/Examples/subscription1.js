
htmlData = `Hey there, we=E2=80=99re just writing to let you know that you=E2=80=99ve b=
een automatically subscribed to a repository on GitHub.



    getmailscript/gpt3-api

    https://github.com/getmailscript/gpt3-api



You=E2=80=99ll receive notifications for all issues, pull requests, and com=
ments that happen inside the repository. If you would like to stop watching=
 this repository, you can manage your settings here:



    https://github.com/getmailscript/gpt3-api/subscription



You can unwatch this repository immediately by clicking here:



    https://github.com/getmailscript/gpt3-api/unsubscribe_via_email/AN2BDH6=
4BEYZNYWIZM4ZBFDSADTX5ANCNFSM4EIBTAKA



You were automatically subscribed because you=E2=80=99ve been given access =
to the repository.



Thanks!`;

var jsonData = {
    from: [{ name: "Gorka Ludlow ", address: "noreply@github.com"}],
    content: htmlData,
    contentType : 'text/plain',
    subject: "[GitHub] Subscribed to getmailscript/gpt3-api notifications",
  };

var output = JSON.stringify(jsonData)

var expectedData = { data:
    { type: 'Subscription',
      repository: 'getmailscript/gpt3-api',
      links: 'https://github.com/getmailscript/gpt3-api',
      from: 'github',
      org: 'getmailscript',
      repo: 'gpt3-api' },
   error: null }

module.exports = {output,expectedData}