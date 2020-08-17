
const axios = require("axios").default;
let htmlData = `
Here's what you missed on Trello.

Rahul D added you to the card New stuff to do (https://trello.com/c/vMi1kXIz/2-new-stuff-to-do) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3dz5ivlpuxg3mbrx+03uafftupp@boards.trello.com

Rahul D added you to the card Yada Yada Yaaaaa..... (https://trello.com/c/cSWBbNHu/4-yada-yada-yaaaaa) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3e6117mi0ghsfgb2+2m1dgv04kf@boards.trello.com

-- 

Control how often you receive notification emails on your account page (https://trello.com/my/account)

Follow @trello on Twitter (https://twitter.com/intent/follow?user_id=360831528)

Get Trello for your iPhone (http://itunes.com/apps/trello) or Trello for your Android (https://play.google.com/store/apps/details?id=com.trello) 
`

var jsonData = {
    from: [{ name: "Trello", address: "do-no-reply@trello.com" }],
    content: htmlData,
    contentType: 'text/plain',
    subject: "rahul81 invited you to rahul81/GPT3parser",
};
let stringy = JSON.stringify(jsonData);

axios({
    url: "http://localhost:3200/custom_routes/trello",
    headers: {
        "Content-Type": "application/json",
    },
    data: stringy,
})
    .then((res) => {
        console.log(res.data);
    })
    .catch((e) => console.log(e.message));