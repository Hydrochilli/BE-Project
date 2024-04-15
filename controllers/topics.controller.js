const {getAllTopics} = require('../models/topics.model');

exports.getTopics = async (req, res) => {
    
    const topics = await getAllTopics();
    if(!topics || topics.length === 0) {
        return res.status(404).send({ message: 'page not found'})
    }
    res.status(200).send({topics})

}
