const http = require('http');

http.createServer((req, res) => {
  const cookie = req.headers.cookie;

  const json_cookie = cookie.split(';').map((element) => {
    const ele = element.split('=');
    return {
      key: ele[0],
      value: ele[1]
    }
  })
  res.writeHead(200, {
    'Content-Type': 'html',
    'Set-Cookie': ['name = Yeon', 'region = Seoul'],
  })

  res.end(`
    <h1> ${JSON.stringify(json_cookie)} </h1>
  `)
}).listen(52273, () => {
  console.log('Connected at 52273');
})