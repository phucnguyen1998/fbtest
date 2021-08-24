'use strict';

const express = require('express');
const { PORT } = require('./config')
const request = require('request-promise');

const app = express();

const id = '102171271918001';  
const access_token = 'EAAP0wZAlaZAU4BAFgjfrgPfZAHzohxNPeh1o3i566iS2Os2oJDLFAkOdk1pK2MnVxUJbzxdWCX8LhC1fErso10MiGYETbDSMZBJ9MJ6zNx2PZC6vpgIZC9KP8ZC022f8bslBDuvRQWczlMnrGLVkZB78RvZAj4kNTzkZBczWBBDfMwFOGsk5dlROZBb1pbSZAnfueBD5DpuImmenPC0dmaj8vZAg7';

app.get('/', (req, res) => {

  const postTextOptions = {  
    method: 'POST',
    uri: `https://graph.facebook.com/102171271918001/feed`,
    qs: {
      access_token: access_token,
      message: 'Hello world!'
    }
  };
  request(postTextOptions)
  .then((res) => {console.log(res);})
  .catch(err => {console.log(err.error)})  
});

app.listen(PORT, () =>
  console.log(`Your app is listening on port ${PORT}`)
);
