const http = require('http');
const express = require('express');

const app = express();

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
    `
      <h1>Hello express</h1>
    `
  );
});

http.createServer(app).listen(52273, () => {
  console.log('Server running at 52273');
});