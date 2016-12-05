const http = require('http');
const express = require('express');

const app = express();

// send => auto render data type 

app.use((req, res) => {
  const output = [];
  for(var i = 0; i < 3; i++) {
    output.push({
      count: i,
      name: 'name - ' + i,
    });
  }
  res.send(output);
})

// status code

app.use((req, res, next) => {
  res.send(404, `<h1>Error</h1>`);
})

http.createServer(app).listen(52273, () => {
  console.log('Server running at 52273');
})