const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  console.log(query);
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(`
    <h1> ${JSON.stringify(query)} </h1>
  `)
}).listen(52273, () => {
  console.log('Server Running at 52273');
})

http.createServer((req, res) => {
  req.on('data', (data) => {
    console.log('POST DATA : ', data);
  })
}).listen(52274, () => {
  console.log('Server Running at 52274');
})