import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
