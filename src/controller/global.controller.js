const models = require('../../database/models');
const Seq = require('sequelize')
const Op = Seq.Op

module.exports = {
    getTestimonial: (req, res) => {
        models.tb_testimoni.findAll({}).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    postTestimonial: (req, res) => {
        models.tb_testimoni.bulkCreate(req.body)
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    getOneTestimonial: (req, res) => {
        models.tb_testimoni.findOne({
            where: {
                id: req.params.id_testimoni
            }
        }).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updateTestimonial: (req, res) => {
        models.tb_testimoni.findOne({
            where: {
                id: req.params.id_testimoni
            }
        }).then( _data => {
            return _data.update(req.body)
            .then(_resp => {
                res.status(200).json(_data)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    deleteTestimonial: (req, res) => {
        models.tb_testimoni.destroy({
            where: {
                id: req.params.id_testimoni
            }
        }).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getGallery: (req, res) => {
        models.tb_project_gallery.findAll({
            include: [
                {
                    model: models.tb_gallery_image
                }
            ]
        })
        .then(_data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    deleteImageGallery: (req, res) => {
        models.tb_gallery_image.destroy({where: {
            id: req.params.id_image
        }}).then(_data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    addImageGallery: (req, res) => {
        models.tb_gallery_image.create(req.body)
        .then(_data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getOneGallery: (req, res) => {
        models.tb_project_gallery.findOne({
            where: {
                id: req.params.id_gallery
            },
            include: [
                {
                    model: models.tb_gallery_image
                }
            ]
        })
        .then(_data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    updateGallery: (req, res) => {
        models.tb_project_gallery.findOne({
            where: {
                id: req.params.id_gallery
            }
        }).then(_gallery => {
            return _gallery.update(req.body)
            .then(_data => {
                res.status(200).json(_data)
            }).catch( _err => res.status(_err.code || 500).send( _err ))
        })
    },
    deleteGallery: (req, res) => {
        models.tb_project_gallery.destroy({
            where: {
                id: req.params.id_gallery
            }
        })
        .then(_data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    createGallery: (req, res) => {
        models.tb_project_gallery.create(req.body)
        .then(_data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
}