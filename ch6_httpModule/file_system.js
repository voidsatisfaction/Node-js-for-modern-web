const http = require('http');
const fs = require('fs');

// render html
http.createServer((req, res) => {
  fs.readFile('example.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  })
}).listen(52273, () => {
  console.log('Server Running at http://127.0.0.1:52273');
})

// render image
http.createServer((req, res) => {
  fs.readFile('example.jpeg', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  })
}).listen(52274, () => {
  console.log('Server Running at http://127.0.0.1:52274');
})

// render mp3
http.createServer((req, res) => {
  fs.readFile('emainmacha.mp3', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });
    res.end(data);
  })
}).listen(52275, () => {
  console.log('Server Running at http://127.0.0.1:52275');
})