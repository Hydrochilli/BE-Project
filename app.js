const { getTopics } = require('./controllers/topics.controller');
const express = require('express');
const app = express();

app.use(express.json())

app.get('/api/topics', getTopics)
app.use('/*', (req, res, next) => {
    res.status(404).send({ message: 'page not found' });
  });


module.exports = app