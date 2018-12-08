const express = require('express');
const path = require('path');
const app = express();

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

app.get('*', (req , res) => {
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`dist/${req.url}`));
  } else {
    res.sendFile(path.resolve('dist/index.html'));
  }
});


app.listen(8080);
