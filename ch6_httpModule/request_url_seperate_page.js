const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname.toLowerCase();

  switch (pathName) {
    case '/':
      fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      })
      break;
    case '/otherpage':
      fs.readFile('index2.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      })
      break;
    default:
      break;
  }
}).listen(52273, () => {
  console.log('Server connected at 52273');
})