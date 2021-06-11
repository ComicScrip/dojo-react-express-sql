const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('hello');
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
