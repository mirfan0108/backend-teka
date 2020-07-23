const models = require('../../database/models');
const Seq = require('sequelize')
const Op = Seq.Op

module.exports = {
    getAll: (req, res) => {
        let page = req.query.page ? req.query.page : 1
        let offset = parseInt(page) != 1 ? (parseInt(page)-1)*parseInt(limit) : 0
        let limit = req.query.limit ? req.query.limit : 6
        let lang =  req.query.lang ? req.query.lang : 2
        models.tb_project_gallery.findAndCountAll({
            where: {
                id_lang: lang
            },
            include: [
                {
                    model: models.tb_gallery_image
                }
            ],
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getOne: (req, res) => {
        let lang =  req.query.lang ? req.query.lang : 2
        models.tb_project_gallery.findOne({
            where: {
                id: req.params.id_gallery,
                id_lang: lang
            },  
            include: [
                {
                    model: models.tb_gallery_image
                }
            ]
        }).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    }
}