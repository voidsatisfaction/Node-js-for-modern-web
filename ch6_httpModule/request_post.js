const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.method == 'GET') {
    fs.readFile('./post_exam.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.method == 'POST') {
    req.on('data', (data) => {
      console.log(data);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>${data}</h1>
      `);
    })
  }
}).listen(52273, () => {
  console.log('Server running at 52273');
})