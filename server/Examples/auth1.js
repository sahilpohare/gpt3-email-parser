const htmlData = `
Hey nikhilm21!

A third-party OAuth application (GitKraken) with admin:public_key, read:org, repo, user:email, and workflow scopes was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/a7557949433b7d282a76 for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
The GitHub Team
`

var jsonData = {
  from: [{ name: "GitHub", address: "noreply@github.com"}],
  content: htmlData,
  contentType : 'text/plain',
  subject: "[GitHub] A third-party OAuth application has been added to your account",
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