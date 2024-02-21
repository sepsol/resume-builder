import express from 'express';
import { printPage, startBrowser } from 'src/utils/index.js';

const app = express();
const port = 4000;
const browser = await startBrowser();

app.get('/', (req, res) => {
  res.send(`Hello, world!`);
});

app.get('/print', async (req, res) => {
  await printPage(undefined, { browser });
  res.status(200);
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
