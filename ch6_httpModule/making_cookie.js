const http = require('http');

http.createServer((req, res) => {
  const date = new Date();
  date.setDate(date.getDate() + 7);

  res.writeHead(200, {
    'Content-Type': 'text/html',
    'set-Cookie': [
      'breakfast = toast;Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]
  })
  res.end(
    `<h1>` + req.headers.cookie + `</h1>`
  );
}).listen(52273, () => {
  console.log('Server is Running at 52273');
})