const axios = require("axios").default;
let trello = `
Here's what you missed on Trello.

Rahul D added you to the card New stuff to do (https://trello.com/c/vMi1kXIz/2-new-stuff-to-do) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3dz5ivlpuxg3mbrx+03uafftupp@boards.trello.com

Rahul D added you to the card Yada Yada Yaaaaa (https://trello.com/c/cSWBbNHu/4-yada-yada-yaaaaa) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3e6117mi0ghsfgb2+2m1dgv04kf@boards.trello.com

-- 

Control how often you receive notification emails on your account page (https://trello.com/my/account)

Follow @trello on Twitter (https://twitter.com/intent/follow?user_id=360831528)

Get Trello for your iPhone (http://itunes.com/apps/trello) or Trello for your Android (https://play.google.com/store/apps/details?id=com.trello)`

var jsonData = {
  from: [{ name: "Trello", address: "do-no-reply@trello.com" }],
  content: trello,
  contentType: "text/plain",
  subject: "Trello",
};
let stringy = JSON.stringify(jsonData);

it('tests trello',() => {
    axios({
      url: "http://localhost:3200/custom_routes/trello",
      headers: {
        "Content-Type": "application/json",
      },
      data: stringy,
    })
      .then((res) => {
          expect(res).toBe({
              notifications : [
                {
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
                  },
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
              ] 
          })
        console.log(res.data);
      })
      .catch((e) => console.log(e.message));
    
})
