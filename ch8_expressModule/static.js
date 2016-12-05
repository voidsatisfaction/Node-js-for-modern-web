import http from 'http';
import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));
// register ./public as a rootfolder.
app.use(express.static(__dirname + '/public'));
app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<img src="/haedal.png">`)
})

http.createServer(app).listen(52273, (req, res) => {
  console.log('Server Running at 52273');
})