const models = require('../../database/models');
const Seq = require('sequelize')
const Op = Seq.Op

module.exports = {
    getBanner: (req, res) => {
        models.tb_banner.findAll({}).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    getOneBanner: (req, res) => {
        models.tb_banner.findOne({where: {id: req.params.id_banner}}).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    createBanner: (req, res) => {
        models.tb_banner.create(req.body).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    modifyBanner: (req, res) => {
        models.tb_banner.findOne({where: {id: req.params.id_banner}}).then( _data => {
            return _data.update(req.body)
            .then(_resp => {
                res.status(200).json(_resp)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    deleteBanner: (req, res) => {
        models.tb_banner.destroy({where: {id: req.params.id_banner}}).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },


    getTnc: (req, res) => {
        models.tb_static_content.findAll({
            attributes: ['id', 'tnc', 'id_lang']
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    getOneTnc: (req, res) => {
        models.tb_static_content.findOne({
            attributes: ['id', 'tnc', 'id_lang'],
            where: {
                id: req.params.id_tnc
            }
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updateTnc: (req, res) => {
        models.tb_static_content.findOne({
            attributes: ['id', 'tnc', 'id_lang'],
            where: {
                id: req.params.id_tnc
            }
        })
        .then(_resp => {
            return _resp.update({tnc: req.body.tnc})
            .then(resp => {
                res.status(200).json(resp)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    
    getPolicy: (req, res) => {
        models.tb_static_content.findAll({
            attributes: ['id', 'privacy_policy', 'id_lang']
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    getOnePolicy: (req, res) => {
        models.tb_static_content.findOne({
            attributes: ['id', 'privacy_policy', 'id_lang'],
            where: {
                id: req.params.id_privacy_policy
            }
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updatePolicy: (req, res) => {
        models.tb_static_content.findOne({
            attributes: ['id', 'privacy_policy', 'id_lang'],
            where: {
                id: req.params.id_privacy_policy
            }
        })
        .then(_resp => {
            return _resp.update({privacy_policy: req.body.privacy_policy})
            .then(resp => {
                res.status(200).json(resp)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getVideo: (req, res) => {
        models.tb_static_content.findAll({
            attributes: [
                'id', 
                'id_lang',
                'video_title',
                'video_subtitle',
                'video_summary',
                'video_link']
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updateVideo: (req, res) => {
        models.tb_static_content.findOne({
            where: {
                id: req.params.id_content
            }
        })
        .then(_resp => {
            return _resp.update(req.body)
            .then(resp => {
                res.status(200).json(resp)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getPromo: (req, res) => {
        models.tb_static_content.findAll({
            attributes: [
                'id', 
                'promo_section_title', 
                'promo_section_subtitle',  
                'promo_section_caption',
                'promo_section_link',
                'promo_section_image',
                'id_lang']
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    getOnePromo: (req, res) => {
        models.tb_static_content.findOne({
            attributes: [
                'id', 
                'promo_section_title', 
                'promo_section_subtitle',  
                'promo_section_caption',
                'promo_section_link',
                'promo_section_image',
                'id_lang'],
            where: {
                id: req.params.id_promotion
            }
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updatePromo: (req, res) => {
        models.tb_static_content.findOne({
            attributes: [
                'id', 
                'promo_section_title', 
                'promo_section_subtitle',  
                'promo_section_caption',
                'promo_section_link',
                'promo_section_image',
                'id_lang'],
            where: {
                id: req.params.id_promotion
            }
        })
        .then(_resp => {
            return _resp.update(req.body)
            .then(resp => {
                res.status(200).json(resp)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    getFaq: (req, res) => {
        models.tb_faq.findAll({})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    createFaq: (req, res) => {
        models.tb_faq.create(req.body)
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updateFaq: (req, res) => {
        models.tb_faq.findOne({where: {id: req.params.id_faq}})
        .then(_resp => {
            return _resp.update(req.body)
            .then(resp => {
                res.status(200).json(resp)
            })
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    deleteFaq: (req, res) => {
        models.tb_faq.destroy({where: {id: req.params.id_faq}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },


    getProfile: (req, res) => {
        models.tb_profile.findAll(
            {
                include: [
                    {
                        model: models.tb_why_us
                    }
                ]
            })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    updateProfileAll: (req, res) => {
        models.tb_profile.update(req.body, {where: {id: [1, 2, 3]}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    updateProfile: (req, res) => {
        models.tb_profile.update(req.body, {where: {id: req.params.id}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    updateWhyUs: (req, res) => {
        models.tb_why_us.update(req.body, {where: {id: req.params.id}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },


    getPartners: (req, res) => {
        models.tb_partner.findAll({})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    createNewPartner: (req, res) => {
        models.tb_partner.create(req.body)
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    destroyPartner: (req, res) => {
        models.tb_partner.destroy({where: {id: req.params.id}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    updatePartner: (req, res) => {
        models.tb_partner.update(req.body, {where: {id: req.params.id}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    
    getCert: (req, res) => {
        models.tb_certificate.findAll({})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    createCert: (req, res) => {
        models.tb_certificate.create(req.body)
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    destroyCert: (req, res) => {
        models.tb_certificate.destroy({where: {id: req.params.id}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    updateCert: (req, res) => {
        models.tb_certificate.update(req.body, {where: {id: req.params.id}})
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    

    
}