const path = require('path');
const express = require('express');
const api = require('./api');

express()
  .use(express.static(path.join(__dirname, 'build'), {maxAge: '31d'}))
  .use('/api', api)
  .get('*', (req, res) => res.sendFile(path.join(__dirname, './build/index.html')))
  .listen(process.env.PORT || 3000, () => console.log('Server started'));
