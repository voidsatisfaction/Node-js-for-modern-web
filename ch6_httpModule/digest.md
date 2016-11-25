## CH6 :: http모듈

### server객체
- EventEmitter객체를 기반으로 만들어짐. 그러므로 이벤트를 연결할 수 있다.(on)
- Method : `listen`, `close()`
- Event : request, connection, close, checkContinue, upgrade, clientError

```js

require('http').createServer((req, res) => { // same with request event listener
  // response code : 200(succeeded) , object
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World...!</h1>');
}).listen(52273, () => { // will listen 127.0.0.1:52273
  console.log('Server Running at http://127.0.0.1:52273');
});

```

### response객체
- request eventListener의 두 번째 매개변수로 전달되는 객체
- Method : writeHead(statusCode, object), end([data],[encoding]) 
- fs모듈을 이용하면 html, text, image, mp3 ... 등의 파일들을 제공할 수 있다.
- `MIME 형식` 참고.
- 쿠키 생성(Set-Cookie)
- 페이지 강제 이동(Location)