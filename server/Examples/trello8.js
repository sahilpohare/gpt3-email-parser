htmlData = `
Here's what you missed on Trello.

Rahul D added you to the card Wolf of the wall Street (https://trello.com/c/rD2hHSAK/7-wolf-of-the-wall-street) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3fmazkn6lijc4712+24abwbijo1@boards.trello.com

Rahul D added you to the card Oceans Eleven (https://trello.com/c/ztzeekUI/6-oceans-eleven) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3fi25cgdfs7tvqmn+0wo47he52z@boards.trello.com

Rahul D added you to the card Finding nemo (https://trello.com/c/ofnVRjPQ/5-finding-nemo) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3fe1tkn81roaxgqb+12qj5s4m1a@boards.trello.com

Rahul D removed you from the card Yada Yada Yaaaaa..... (https://trello.com/c/cSWBbNHu/4-yada-yada-yaaaaa) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3e6117mi0ghsfgb2+2m1dgv04kf@boards.trello.com

Rahul D removed you from the card convert html files into clean text (https://trello.com/c/OctrqwRG/1-convert-html-files-into-clean-text) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2utvlnk8vln6m9dkbkp+1rfk1qwlnx@boards.trello.com

Rahul D added you to the card New stuff to do (https://trello.com/c/vMi1kXIz/2-new-stuff-to-do) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3dz5ivlpuxg3mbrx+03uafftupp@boards.trello.com

Rahul D removed you from the card New stuff to do (https://trello.com/c/vMi1kXIz/2-new-stuff-to-do) on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3dz5ivlpuxg3mbrx+03uafftupp@boards.trello.com

Rahul D moved the card Finding nemo (https://trello.com/c/ofnVRjPQ/5-finding-nemo) to new tings on GPT3Parser (https://trello.com/b/Zpi6DEb2/gpt3parser)

 Reply via email: nikhilmishra3+2tqhnhzbml13gniy791+2uu3fe1tkn81roaxgqb+12qj5s4m1a@boards.trello.com

-- 

Control how often you receive notification emails on your account page (https://trello.com/my/account)

Follow @trello on Twitter (https://twitter.com/intent/follow?user_id=360831528)

Get Trello for your iPhone (http://itunes.com/apps/trello) or Trello for your Android (https://play.google.com/store/apps/details?id=com.trello) ;
`
var jsonData = {
    from: [{ name: "Rahul Das", address: "donoytreply@trello.com"}],
    content: htmlData,
    contentType : 'text/plain',
    subject: " 8 new notifications on GPT3Parser since 12:17 PM (August 13, 2020)",
  };

var output = JSON.stringify(jsonData)

var expectedData = {
    data: {
      type: 'Action',
      by: 'Rahul D',
      action: 'added',
      card: 'Oceans Eleven',
      cardLink: 'https://trello.com/c/ztzeekUI/6-oceans-eleven',
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
      card: 'Wolf of the wall Street',
      cardLink: 'https://trello.com/c/rD2hHSAK/7-wolf-of-the-wall-street',
      board: 'GPT3Parser',
      boardLink: 'https://trello.com/b/Zpi6DEb2/gpt3parser',
      from: 'trello'
    },
    error: null
  }
  null
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
  {
    data: {
      type: 'Action',
      by: 'Rahul D',
      action: 'moved',
      fromCard: 'Finding Nemo',
      cardLink: 'https://trello.com/c/ofnVRjPQ/5-finding-nemo',
      toCard: 'new tings',
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
      card: 'Finding nemo',
      cardLink: 'https://trello.com/c/ofnVRjPQ/5-finding-nemo',
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
      card: 'Oceans Eleven',
      cardLink: 'https://trello.com/c/ztzeekUI/6-oceans-eleven',
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
      card: 'Finding nemo',
      cardLink: 'https://trello.com/c/ofnVRjPQ/5-finding-nemo',
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
      action: 'removed',
      card: 'Yada Yada Yaaaaa.....',
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
      action: 'moved',
      fromCard: 'Finding Nemo',
      cardLink: 'https://trello.com/c/ofnVRjPQ/5-finding-nemo',
      toCard: 'new tings',
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
      card: 'Wolf of the wall Street',
      cardLink: 'https://trello.com/c/rD2hHSAK/7-wolf-of-the-wall-street',
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
      action: 'removed',
      card: 'convert html files into clean text',
      cardLink: 'https://trello.com/c/OctrqwRG/1-convert-html-files-into-clean-text',
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