const htmlData = `
Hey nikhilm21!

A first-party GitHub OAuth application (GitHub for VSCode) with repo and workflow scopes was recently authorized to access your account.
Visit https://github.com/settings/connections/applications/01ab8ac9400c4e429b23 for more information.

To see this and other security events for your account, visit https://github.com/settings/security

If you run into problems, please contact support by visiting https://github.com/contact

Thanks,
The GitHub Team

`

var jsonData = {
  from: [{ name: "GitHub", address: "noreply@github.com"}],
  content: htmlData,
  contentType : 'text/plain',
  subject: "[GitHub] A first-party OAuth application has been added to your account",
};