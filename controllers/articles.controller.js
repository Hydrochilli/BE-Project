const {selectArticleByID,
        selectAllArticles
    } = require('../models/articles.model')

exports.getArticleByID = async (req, res, next) => {
     const { article_id} = req.params
    if(isNaN(article_id)) {
        const error = new Error('article_id invalid--> must be number!')
        error.status = 400
        return next(error)
    }
    
    
    try {
        
  
    const article = await selectArticleByID(article_id)
    
    if(!article) {
        return res.status(404).send({message: 'cannot find article'})
    }
    
    res.status(200).send({article})
} catch (error) {
    next(error)
}
}
exports.getAllArticles = async (req, res, next) => {
try {
    const articles = await selectAllArticles()

    const formattedArticles = articles.map(article => {
        const {body, ...rest} = article
        return rest
    })
    res.status(200).send({ articles: formattedArticles})
} catch (error) {
    next(error)
}
}
