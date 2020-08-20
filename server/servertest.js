const { json } = require("body-parser");

const axios = require("axios").default;

let invitationMail = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
    <title>rahul81 invited you to rahul81/GPT3parser</title>

    

  </head>
<body bgcolor="#fafafa" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" style="width: 100% !important; min-width: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #fafafa; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; text-align: center; line-height: 20px; font-size: 14px; margin: 0; padding: 0;">

  <table class="body" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; height: 100%; width: 100%; background-color: #fafafa; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" bgcolor="#fafafa">
    <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
      <td class="center" align="center" valign="top" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;">
        <center style="width: 100%; min-width: 580px;">
        <!--email content-->

          <table class="row header" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; position: relative; padding: 0px;">
            <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
              <td class="center" align="center" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" valign="top">
                <center style="width: 100%; min-width: 580px;">

                  <table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; width: 580px; margin: 0 auto; padding: 0;">
                    <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
                      <td class="wrapper last" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; position: relative; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0 0px 0 0;" align="center" valign="top">

                        <table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 540px; margin: 0 auto; padding: 0;">
                          <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
                            <td style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="center" valign="top">
                              <div class="mark" style="text-align: center;" align="center">
                                <!-- add UTM params to URL -->
                                <a href="https://github.com" style="color: #4183C4; text-decoration: none;">
                                  <img alt="GitHub, Inc." class="center logo-wordmark" src="https://github.githubassets.com/images/email/global/wordmark.png" width="102" height="28" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; float: none; text-align: center; margin: 0 auto; padding: 25px 0 17px; border: none;" align="none">
                                </a>
                              </div>
                            </td>
                            <td class="expander" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; visibility: hidden; width: 0px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" align="center" valign="top"></td>
                          </tr>
                        </table>
<!--/.twelve.columns-->

                      </td>
                    </tr>
                  </table>
<!--/.container-->

                </center>
              </td>
            </tr>
          </table>
<!--/.row.header-->

          <table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; width: 580px; margin: 0 auto; padding: 0;">
            <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
              <td style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" align="center" valign="top">

                <table class="row" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; position: relative; display: block; padding: 0px;">
                  <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
                    <td class="wrapper last" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; position: relative; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0 0px 0 0;" align="center" valign="top">

                      <div class="panel" style="background-color: #ffffff; border-radius: 3px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); padding: 20px; border: 1px solid #dddddd;">

                        <table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 540px; margin: 0 auto; padding: 0;">
                          <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
                            <td style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0px 0px 0;" align="center" valign="top">

                              <div class="email-content">

                                <div class="org-content-header" style="padding: 15px 0 10px;">
  <img class="avatar avatar-user" src="https://avatars0.githubusercontent.com/u/47684531?s=120&amp;v=4" width="60" height="60" alt="@rahul81" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; overflow: hidden; -webkit-border-radius: 3px; border-radius: 3px;">
  <img class="content-header-octicon" alt="plus" src="https://github.githubassets.com/images/email/organization/octicon-plus.png" height="60" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%;">
    <img class="avatar avatar-user" src="https://avatars3.githubusercontent.com/u/57938335?s=120&amp;v=4" width="60" height="60" alt="@nikhilm21" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; overflow: hidden; -webkit-border-radius: 3px; border-radius: 3px;">
</div>

<h1 class="primary-heading" style="color: #333; font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; font-weight: 300; text-align: center; line-height: 1.2; word-break: normal; font-size: 24px; margin: 10px 0 25px; padding: 0;" align="center">@rahul81 has invited you to collaborate on the<br><strong>rahul81/GPT3parser</strong> repository</h1>

<hr class="rule" style="color: #d9d9d9; background-color: #d9d9d9; height: 1px; margin: 20px 0; border: none;">

<p style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: normal; color: #333; line-height: 20px; text-align: left; margin: 15px 0 5px; padding: 0;" align="left">
  You can <a href="https://github.com/rahul81/GPT3parser/invitations" style="color: #4183C4; text-decoration: none;">accept or decline</a> this invitation.
    You can also visit <a href="https://github.com/rahul81" style="color: #4183C4; text-decoration: none;">@rahul81</a> to learn a bit more about them.
</p>
<p style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: normal; color: #333; line-height: 20px; text-align: left; margin: 15px 0 5px; padding: 0;" align="left">
  This invitation will expire in 7 days.
</p>
<!-- note: VML markup is fallback for Outlook 2007, 2010, and 2013; see http://buttons.cm/ -->
<div class="cta-button-wrap cta-button-wrap-centered" style="text-align: center; color: #ffffff; padding: 20px 0 25px;" align="center">
<!--[if mso]>
<p style="line-height:0px;height:0;font-size:1px;margin:0;padding:0;">&nbsp;</p>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://github.com/rahul81/GPT3parser/invitations" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="8%" stroke="f" fillcolor="#4183C4">
  <w:anchorlock/>
  <center>
<![endif]-->
    <a class="cta-button" href="https://github.com/rahul81/GPT3parser/invitations" style="display: inline-block; color: #fff; font-size: 14px; font-weight: 600; text-decoration: none; width: auto !important; text-align: center; border-radius: 5px; -webkit-border-radius: 5px; box-shadow: 0px 3px 0px #25588c; letter-spacing: normal; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-text-size-adjust: none; background: #28A73F linear-gradient(-180deg, #34d058 0%, #28a745 90%); margin: 0 auto; padding: 6px 12px;">View invitation</a>
<!--[if mso]>
  </center>
</v:roundrect>
<![endif]-->
</div>


<p class="email-body-subtext" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; font-weight: normal; color: #333; line-height: 20px; text-align: left; margin: 15px 0 5px; padding: 0;" align="left">
  <strong>Note:</strong> This invitation was intended for <strong>nkmishra0103@gmail.com</strong>.
  If you were not expecting this invitation, you can ignore this email.
    If  @rahul81 is sending you too many emails, you can
    <a href="https://github.com/settings/blocked_users?block_user=rahul81" style="color: #4183C4; text-decoration: none;">block them</a>
    or <a href="https://github.com/contact/report-abuse?report=rahul81" style="color: #4183C4; text-decoration: none;">report abuse</a>.
</p>

<hr class="rule" style="color: #d9d9d9; background-color: #d9d9d9; height: 1px; margin: 20px 0; border: none;">

<p class="email-text-small email-text-gray" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #777777; line-height: 20px; text-align: left; margin: 15px 0 5px; padding: 0;" align="left">
  <strong>Getting a 404 error?</strong> Make sure you&#8217;re signed in as <strong>nikhilm21</strong>.
</p>

<p class="email-text-small email-text-gray" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #777777; line-height: 20px; text-align: left; margin: 15px 0 5px; padding: 0;" align="left">
  <strong>Button not working?</strong> Copy and paste this link into your browser:
  <br><a href="https://github.com/rahul81/GPT3parser/invitations" style="color: #4183C4; text-decoration: none;">https://github.com/rahul81/GPT3parser/invitations</a>
</p>


                              </div>
<!--/.content-->

                            </td>
                            <td class="expander" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; visibility: hidden; width: 0px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" align="center" valign="top"></td>
                          </tr>
                        </table>
<!--/.twelve-columns-->

                      </div>
<!--/.panel-->

                    </td>
                  </tr>
                </table>
<!--/.row-->

              </td>
            </tr>
          </table>
<!--/.container-->

          <table class="row layout-footer" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 100%; position: relative; padding: 0px;">
            <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
              <td class="center" align="center" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" valign="top">
                <center style="width: 100%; min-width: 580px;">

                  <table class="container" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: inherit; width: 580px; margin: 0 auto; padding: 0;">
                    <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
                      <td class="wrapper last" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; position: relative; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0 0px 0 0;" align="center" valign="top">

                        <table class="twelve columns" style="border-spacing: 0; border-collapse: collapse; vertical-align: top; text-align: center; width: 540px; margin: 0 auto; padding: 0;">
                          <tr style="vertical-align: top; text-align: center; padding: 0;" align="center">
                            <td style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0px 0px 10px;" align="center" valign="top">
                              <div class<p></p>
                              <p>Closed <a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="677746798" data-permission-text="Title is private" data-url="https://github.com/getmailscript/gpt3-api/issues/23" data-hovercard-type="issue" data-hovercard-url="/getmailscript/gpt3-api/issues/23/hovercard" href="https://github.com/getmailscript/gpt3-api/issues/23">#23</a>.</p>
                              
                              <p style="font-size:small;-webkit-text-size-adjust:none;color:#666;">&mdash;<br />You are receiving this because you commented.<br />Reply to this email directly, <a href="https://github.com/getmailscript/gpt3-api/issues/23#event-3669968790">view it on GitHub</a>, or <a href="https://github.com/notifications/unsubscribe-auth/ALLZXMZVHUNCMZIPSB7OKB3SBONKFANCNFSM4P4ZS7HA">unsubscribe</a>.<img src="https://github.com/notifications/beacon/ALLZXMZF5Q6OBUHSXTEWBVTSBONKFA5CNFSM4P4ZS7HKYY3PNVWWK3TUL52HS4DFWZEXG43VMVCXMZLOORHG65DJMZUWGYLUNFXW5KTDN5WW2ZLOORPWSZGO3K7UPFQ.gif" height="1" width="1" alt="" /></p>
                              <script type="application/ld+json">[
                              {
                              "@context": "http://schema.org",
                              "@type": "EmailMessage",
                              "potentialAction": {
                              "@type": "ViewAction",
                              "target": "https://github.com/getmailscript/gpt3-api/issues/23#event-3669968790",
                              "url": "https://github.com/getmailscript/gpt3-api/issues/23#event-3669968790",
                              "name": "View Issue"
                              },
                              "description": "View this Issue on GitHub",
                              "publisher": {
                              "@type": "Organization",
                              "name": "GitHub",
                              "url": "https://github.com"
                              }
                              }
                              ]</script>="footer-links" style="text-align: center; padding: 20px 0;" align="center">
                                <!-- links need UTM params -->
                                <p class="footer-text" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #999; line-height: 20px; text-align: center; margin: 0; padding: 0;" align="center"><a href="https://github.com/settings/emails" style="color: #4183C4; text-decoration: none;">Manage your GitHub email preferences</a></p>
                                <p class="footer-text" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #999; line-height: 20px; text-align: center; margin: 0; padding: 0;" align="center">
                                    <a href="https://docs.github.com/articles/github-terms-of-service/" style="color: #4183C4; text-decoration: none;">Terms</a> &#8226;
                                    <a href="https://docs.github.com/articles/github-privacy-policy/" style="color: #4183C4; text-decoration: none;">Privacy</a> &#8226;
                                  <a href="https://github.com/login" style="color: #4183C4; text-decoration: none;">Log in to GitHub</a>
                                </p>
                              </div>
                              <div class="content" style="margin: 0 0 15px;">
                                <!-- add UTM params to URL -->
                                <a href="https://github.com" style="color: #4183C4; text-decoration: none;">
                                  <img class="logo-invertocat" src="https://github.githubassets.com/images/email/global/footer-mark.png" width="40" height="38" style="outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; width: auto; max-width: 100%; border: none;">
                                </a>
                              </div>
                              <div class="content" style="margin: 0 0 15px;">
                                <p class="footer-text" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #999; line-height: 20px; text-align: center; margin: 0; padding: 0;" align="center">GitHub, Inc.</p>
                                <p class="footer-text" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #999; line-height: 20px; text-align: center; margin: 0; padding: 0;" align="center">88 Colin P Kelly Jr Street</p>
                                <p class="footer-text" style="word-wrap: normal; hyphens: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #999; line-height: 20px; text-align: center; margin: 0; padding: 0;" align="center">San Francisco, CA 94107</p>
                              </div>
                            </td>
                            <td class="expander" style="word-break: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; border-collapse: collapse !important; vertical-align: top; text-align: center; visibility: hidden; width: 0px; color: #333333; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: normal; line-height: 20px; font-size: 14px; margin: 0; padding: 0;" align="center" valign="top"></td>
                          </tr>
                        </table>
<!--/.twelve.columns-->

                      </td>
                    </tr>
                  </table>
<!--/.container-->

                </center>
              </td>
            </tr>
          </table>
<!--/.row.footer-->

        <!--/email content-->
        </center>
      </td>
    </tr>
  </table>
<!--/.body-->
</body>
</html>
`;



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
let stringy = JSON.stringify(jsonData);

axios({
  url: "http://localhost:3200/parse",
  headers: {
    "Content-Type": "application/json",
  },
  data: stringy,
})
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => console.log(e.message));


  // var jsonData = {
  //   from: [{ name: "Rahul Das", address: "notification@github.com" }],
  //   content: invitationMail,
  //   contentType : 'text/html',
  //   subject: "rahul81 invited you to rahul81/GPT3parser",
  // };
  
  // let strinagy = JSON.stringify(jsonData);
  // axios({
  //   url: "http://localhost:3200/parse",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: strinagy,
  // })
  //   .then((res) => {
  //     console.log(res.data);
  //   })
  //   .catch((e) => console.log(e.message));
  
  