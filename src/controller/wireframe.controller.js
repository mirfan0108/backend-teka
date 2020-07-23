const models = require('../../database/models');
const Seq = require('sequelize')
const Op = Seq.Op

module.exports = {
    getLang: (req, res) => {
        models.tb_lang.findAll({})
        .then(_data => {
            res.status(200).json(_data)
        })
        .catch(_err => res.status(_err.code || 500).send(_err))
    },
    getWireframe: (req, res) => {
        models.tb_lang.findOne({
            where: {
                id: req.params.id_lang
            },
            include: [
                {
                    model: models.tb_banner,
                    where: {
                        page: req.params.page
                    }
                },
                {
                    model: models.tb_static_content
                },
                {
                    model: models.tb_project_gallery,
                    include: [
                        {
                            model: models.tb_gallery_image
                        }
                    ]
                },
                {
                    model: models.tb_faq
                },
                {
                    model: models.tb_testimoni
                },
                {
                    model: models.tb_profile,
                    include: [
                        {
                            model: models.tb_address
                        }
                    ]
                }
            ]
        }).then( content => {
            return models.tb_prefered.findAll({
                include: [
                    {
                        model: models.tb_product
                    }
                ]
            })
            .then( content_prefered => {
                return models.tb_trend.findAll({
                    include: [
                        {
                            model: models.tb_product
                        }
                    ]
                }).then(content_trend => {
                    res.status(200).json({ content, content_prefered, content_trend})
                })
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getCert: (req, res) => {
        models.tb_certificate.findAll({})
        .then(resp => {
            res.status(200).json(resp)
        })
    }
}