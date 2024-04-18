const db = require('../db/connection')

exports.selectCommentsByArticleID = async (article_id) => {
    const {rows} = await db.query('SELECT comment_id, votes, created_at, author, body FROM comments WHERE article_id = $1 ORDER BY created_at DESC', [article_id])
    return rows
}
