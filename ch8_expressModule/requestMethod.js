const http = require('http');
const express = require('express');

const app = express();

app.use((req, res) => {
  // get parameter
  const name = req.param('name');
  const region = req.param('region');

  res.send(`<h1>${name} - ${region}</h1>`);
});

http.createServer(app).listen(52273, () => {
  console.log('Server Running at');
})