const http = require('http');

http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'http://hanb.co.kr'
  });
  res.end();
}).listen(52273, () => {
  console.log('Server is Running on 127.0.0.1:52273');
})