const {getAllTopics} = require('../models/topics.model');

exports.getAllTopics = async (req, res) => {
    
    const topics = await getAllTopics();
    if(!topics || topics.length === 0) {
        return res.status(404).send({ message: 'route is invalid'})
    }
    res.status(200).send({topics})

}
