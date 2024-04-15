const { getAllTopics } = require('./controllers/topics.controller');
const {getEndpoint} = require('./controllers/api-endpoints.controller')
const express = require('express');
const app = express();

app.use(express.json())

app.get('/api/topics', getAllTopics)
app.get('/api', getEndpoint)


app.use('/*', (req, res, next) => {
    res.status(404).send({ message: 'page not found' });
  });


module.exports = app