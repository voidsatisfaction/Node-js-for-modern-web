require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World...!</h1>');
}).listen(52273, () => {
  console.log('Server is connected');
}).on('connection', () => {
  console.log('connected');
}); // will listen 127.0.0.1:52273