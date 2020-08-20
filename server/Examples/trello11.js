htmlData = `

Here's what you missed on Trello.

Gorka Ludlow moved the card Socket rejection bug (https://trello.com/c/4Xfb7Dld/6-socket-rejection-bug) to Done on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqd5icn0p6qj6e9tgs+2kll3h0nz5@boards.trello.com

Gorka Ludlow mentioned you on the card Add a *link* prop to the msg object (https://trello.com/c/kBMSNBPh/9-add-a-link-prop-to-the-msg-object) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 "@sahilpohare you can assume this will be put in place, for your local tests please send a link with the payload so that you can record a video of how this works"

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqd8jgt5d2e9k9cqyf+2mf0ojlxfb@boards.trello.com

Gorka Ludlow mentioned you on the card Socket rejection bug (https://trello.com/c/4Xfb7Dld/6-socket-rejection-bug) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 "There is no need for an \`auth\` layer. The id was being persisted between server reloads - this has been fixed. Please take a look at: https://www.loom.com/share/3fc11a8c58634caab2613a5682ce1f3c

The flow has been implemented. I will add a couple cards for you @sahilpohare to record videos of the whole flows with mock data. "

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqd5icn0p6qj6e9tgs+2kll3h0nz5@boards.trello.com

Gorka Ludlow moved the card Add a *link* prop to the msg object (https://trello.com/c/kBMSNBPh/9-add-a-link-prop-to-the-msg-object) to Done on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqd8jgt5d2e9k9cqyf+2mf0ojlxfb@boards.trello.com

Gorka Ludlow added you to the card Record video msg notification (https://trello.com/c/YPjbAsJK/11-record-video-msg-notification) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvifazsr7ky655roc+2mvgtbosjq@boards.trello.com

Gorka Ludlow added you to the card Record video cached notification (https://trello.com/c/A3zZ3G4E/12-record-video-cached-notification) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvigplbxgomez85yb+2d4q5x0z0y@boards.trello.com

Gorka Ludlow commented on the card Transfer ownership of the extension repo to MailScript (https://trello.com/c/m5VdVSGd/13-transfer-ownership-of-the-extension-repo-to-mailscript) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 "You will continue to have write access, but the repo should be part of the MailScript org."

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvijf2y87uf4qv1z5+06px1dmp90@boards.trello.com

Gorka Ludlow removed you from the card Transfer ownership of the extension repo to MailScript (https://trello.com/c/m5VdVSGd/13-transfer-ownership-of-the-extension-repo-to-mailscript) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvijf2y87uf4qv1z5+06px1dmp90@boards.trello.com

Gorka Ludlow moved the card Record video msg notification (https://trello.com/c/YPjbAsJK/11-record-video-msg-notification) to To do on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvifazsr7ky655roc+2mvgtbosjq@boards.trello.com

Gorka Ludlow moved the card Record video cached notification (https://trello.com/c/A3zZ3G4E/12-record-video-cached-notification) to To do on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvigplbxgomez85yb+2d4q5x0z0y@boards.trello.com

Gorka Ludlow added you to the card Transfer ownership of the extension repo to MailScript (https://trello.com/c/m5VdVSGd/13-transfer-ownership-of-the-extension-repo-to-mailscript) on MailScript VS Code extension (https://trello.com/b/ypYPPQTH/mailscript-vs-code-extension)

 Reply via email: sahilpohare+2qqyfw1segyt5ih27rw+2uqvijf2y87uf4qv1z5+06px1dmp90@boards.trello.com

-- 

Control how often you receive notification emails on your account page (https://trello.com/my/account)

Follow @trello on Twitter (https://twitter.com/intent/follow?user_id=360831528)

Get Trello for your iPhone (http://itunes.com/apps/trello) or Trello for your Android (https://play.google.com/store/apps/details?id=com.trello) `;

var jsonData = {
    from: [{ name: "Rahul Das", address: "donoytreply@trello.com"}],
    content: htmlData,
    contentType : 'text/plain',
    subject: " 11 new notifications on MailScript VSCode Extension since 5:07 PM (August 1, 2020)",
  };

var output = JSON.stringify(jsonData)

var expectedData = {
  data: {
    type: 'Action',
    by: 'Rahul D',
    action: 'added',
    card: 'Yada Yada Yaaaaa',
    cardLink: 'https://trello.com/c/cSWBbNHu/4-yada-yada-yaaaaa',
    board: 'GPT3Parser',
    boardLink: 'https://trello.com/b/Zpi6DEb2/gpt3parser',
    from: 'trello'
  },
  error: null
}
{
  data: {
    type: 'Action',
    by: 'Rahul D',
    action: 'added',
    card: 'New stuff to do',
    cardLink: 'https://trello.com/c/vMi1kXIz/2-new-stuff-to-do',
    board: 'GPT3Parser',
    boardLink: 'https://trello.com/b/Zpi6DEb2/gpt3parser',
    from: 'trello'
  },
  error: null
}

module.exports = {output,expectedData}