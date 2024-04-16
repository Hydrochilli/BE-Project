const { getAllTopics } = require('./controllers/topics.controller');
const {getEndpoint} = require('./controllers/api-endpoints.controller')
const {getArticleByID} = require('./controllers/articles.controller')
const express = require('express');
const app = express();

app.use(express.json())

app.get('/api/topics', getAllTopics)
app.get('/api', getEndpoint)
app.get('/api/articles/:article_id', getArticleByID)


app.use('/*', (req, res, next) => {
    res.status(404).send({ message: 'route is invalid' });
  });

app.use((err, req, res,  next)  => {
    const statusCode = err.status || 500
    res.status(statusCode).send({
        message: err.message
    })
})
module.exports = app