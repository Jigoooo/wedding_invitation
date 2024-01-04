import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3001;
const __dirname = fileURLToPath(new URL('.', import.meta.url));

app.use(express.static(path.join(__dirname, '../wedding_client/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../wedding_client/build', 'index.html'));
});

app.listen(port, () => {
  console.log('server start 3001 port');
});
