const models = require('../../database/models');
const Seq = require('sequelize')
const Op = Seq.Op

module.exports = {
    getAll: (req, res) => {
        models.tb_social_media.findAll({}).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    }
}