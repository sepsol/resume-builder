import express from 'express';
import { number } from 'src/utils';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send(`Hello, ${number}!`);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
