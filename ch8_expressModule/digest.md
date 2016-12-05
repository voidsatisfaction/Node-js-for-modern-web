# CH8 :: express모듈

```js

const http = require('http');
const express = require('express');

const app = express();

app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(
    `
      <h1>Hello express</h1>
    `
  );
});

http.createServer(app).listen(52273, () => {
  console.log('Server running at 52273');
});

```

## response methods

- response.send()

- response.json()

- response.jsonp()

- response.redirect() 

## request methods

- req.header()

- req.accepts()

- req.param()

- req.is()

## 미들 웨어

- `use()`메소드의 매개변수에 입력하는 함수를 middleware라고 부른다.

- **요청의 응답을 완료하기 전까지 요청 중간중간에서 여러 가지 일을 처리할 수 있다.**

- 미들웨어에서 req객체와 res객체에 속성 또는 메서드를 추가하면 다음 미들웨어 에서 추가한 속성과 메서드를 사용할 수 있다. 

- Types : `logger, static, router, cookie parser, body parser, session` 