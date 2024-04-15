const endPoints = require('../endpoints.json')

exports.getEndpoint = async (req, res, next) => {
    res.status(200).send(endPoints)
};