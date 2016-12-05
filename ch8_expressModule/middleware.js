const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(1);
  // next middleware
  next();
})

app.use((req, res, next) => {
  console.log(2);
  next();
})

app.use((req, res, next) => {
  console.log(3);
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>express Basic</h1>');
})

// middleware is used for doing certain things with req and res objects.
app.use((req, res, next) => {
  req.number = 52;
  res.number = 273;
  next();
})
app.use((req, res, next) => {
  res.send(`<h1>${req.number} : ${res.number}</h1>`)
})

http.createServer(app).listen(52273, () => {
  console.log('Server running at 52273');
});