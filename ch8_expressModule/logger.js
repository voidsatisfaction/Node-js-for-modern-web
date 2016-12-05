import http from 'http';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));
app.use((req, res) => {
  res.send(`<h1>express Basic</h1>`);
});

http.createServer(app).listen(52273, () => {
  console.log('Server Running at http://127.0.0.1:52273');
})