const models = require('../../database/models');
const Seq = require('sequelize')
const Op = Seq.Op
var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, '..' ,'static','images');
var multer = require('multer');


let RangeStringToArray = params => {
    let plan = params.split('-')
    return plan
}

module.exports = {
    getConstruction: (req, res) => {
        models.tb_construction.findAll({}).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    createConstruction: (req, res) => {
        models.tb_construction.create(req.body)
        .then(_resp => {
            res.status(200).json({code: 200, success: true})
        })
        .catch(_err => res.status(_err.code | 500).send(_err))
    },
    removeConstruction: (req, res) => {
        models.tb_construction.destroy({
            where: {
                id: req.params.id_construction
            }
        })
        .then(_resp => {
            res.status(200).json({code: 200, success: true})
        })
        .catch(_err => res.status(_err.code | 500).send(_err))
    },
    modifyConstruction: (req, res) => {
        models.tb_construction.findOne({
            where: {
                id: req.params.id_construction
            }
        }).then(_specie => {
            return _specie.update(req.body).then(_newSpecie => {
                res.status(200).json(_newSpecie)
            })
        })
    },

    getProducts: (req, res) => {
        let page = req.query.page ? req.query.page : 1
        let offset = parseInt(page) != 1 ? (parseInt(page)-1)*parseInt(limit) : 0
        let limit = req.query.limit ? req.query.limit : 12
        let search = req.query.search ? req.query.search : ''
        let construction = req.query.construction && req.query.construction != 0 ? {id: req.query.construction} : {}
        let specie = req.query.specie && req.query.specie != 0 ? {id: req.query.specie} : {}
        let color = req.query.color && req.query.color != 0 ? {id_color_type: req.query.color} : {}
        let sizeWidth = req.query.width && req.query.width != '' ? {
            size_width: {
                [Op.gte]: RangeStringToArray(req.query.width)[0],
                [Op.lte]: RangeStringToArray(req.query.width)[1]
            }
        } : {}

        let sizeLength = req.query.Length && req.query.Length != '' ? {
            size_length: {
                [Op.gte]: RangeStringToArray(req.query.Length)[0],
                [Op.lte]: RangeStringToArray(req.query.Length)[1]
            }
        } : {}

        let sizeThickness = req.query.thickness && req.query.thickness != '' ? {
            size_length: {
                [Op.gte]: RangeStringToArray(req.query.thickness)[0],
                [Op.lte]: RangeStringToArray(req.query.thickness)[1]
            }
        } : {}

        models.tb_product.findAndCountAll({
            distinct: 'tb_products.id',
            where: {
                name: {
                    [Op.substring] : `${search}`
                }
            },
            include: [
                {
                    model: models.tb_construction,
                    where: construction,
                    
                },
                {
                    model: models.tb_specie,
                    where: specie
                },
                {
                    model: models.tb_size_width,
                    where: sizeWidth
                },
                {
                    model: models.tb_size_length,
                    where: sizeLength
                },
                {
                    model: models.tb_size_thickness,
                    where: sizeThickness
                },
                {
                    model: models.tb_color,
                    where: color
                }
            ],
            offset: parseInt(offset),
            limit: parseInt(limit)
        }).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },

    //ADMIN

    getOneProduct: (req, res) => {
        models.tb_product.findOne({
            where: {
                id: req.params.id_product
            },
            include: [
                {
                    model: models.tb_construction
                    
                },
                {
                    model: models.tb_specie
                },
                {
                    model: models.tb_size_width
                },
                {
                    model: models.tb_size_length
                },
                {
                    model: models.tb_size_thickness
                },
                {
                    model: models.tb_color
                }
            ]
        }).then( _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    updateProduct: (req, res) => {
        models.tb_product.findOne({
            where: {
                id: req.params.id_product
            }
        }).then(product => {
            return product.update(req.body)
            .then( _data => {
                res.status(200).json(_data)
            })
        })
    },


    getSpecies: ( req, res) => {
        models.tb_specie.findAll({
            include: [
                {
                    model: models.tb_product,
                    attributes: [ [ Seq.fn('count', Seq.col('tb_products.id')), 'total_product']],
                }
            ],
            group: ['id']
        }).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code || 500).send(_err))
    },

    createSpecies: (req, res) => {
        models.tb_specie.create(req.body)
        .then(_resp => {
            res.status(200).json({code: 200, success: true})
        })
        .catch(_err => res.status(_err.code | 500).send(_err))
    },
    removeSpecies: (req, res) => {
        models.tb_specie.destroy({
            where: {
                id: req.params.id_specie
            }
        })
        .then(_resp => {
            res.status(200).json({code: 200, success: true})
        })
        .catch(_err => res.status(_err.code | 500).send(_err))
    },
    modifySpecies: (req, res) => {
        models.tb_specie.findOne({
            where: {
                id: req.params.id_specie
            }
        }).then(_specie => {
            return _specie.update(req.body).then(_newSpecie => {
                res.status(200).json(_newSpecie)
            })
        })
    },

    getOneProduct: ( req, res ) => {
        models.tb_product.findOne({
            where: {
                id: req.params.id_product
            },
            include: [
                { model: models.tb_construction },
                { model: models.tb_specie },
                { model: models.tb_size_width },
                { model: models.tb_size_length },
                { model: models.tb_size_thickness },
                { model: models.tb_color },
                { model: models.tb_criteria_detail },
                { model: models.tb_installation },
                { model: models.tb_criteria_grading}
            ]
        }).then( async _data => {
            res.status(200).json(_data)
        }).catch( _err => res.status(_err.code || 500).send( _err ))
    },
    
    removeProduct: (req, res) => {
        models.tb_product.destroy({
            where: {
                id: req.params.id_product
            }
        })
        .then(_resp => {
            res.status(200).json(_resp)
        }).catch(_err => {
            res.status(_err.code | 500).send(_err)
        })
    },

    createCriteriaDetail: (req, res) => {
        models.tb_criteria_detail.create(req.body).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))

    },
    updateCriteriaDetail: (req, res) => {
        models.tb_criteria_detail.findOne({
            where: {
                id: req.params.id
            }
        }).then(product => {
            return product.update(req.body)
            .then( _data => {
                res.status(200).json(_data)
            })
        })
    },
    
    createGradingCriteria: (req, res) => {
        models.tb_criteria_grading.bulkCreate(req.body)
        .then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    updateGradingCriteria: (req, res) => {
        models.tb_criteria_grading.findOne({
            where: {
                id: req.params.id
            }
        }).then(product => {
            return product.update(req.body)
            .then( _data => {
                res.status(200).json(_data)
            })
        })
    },

    createInstallation: (req, res) => {
        models.tb_installation.create(req.body).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    updateInstallation: (req, res) => {
        models.tb_installation.findOne({
            where: {
                id: req.params.id
            }
        }).then(product => {
            return product.update(req.body)
            .then( _data => {
                res.status(200).json(_data)
            })
        })
    },

    createProduct: (req, res) => {
        models.tb_product.create(req.body).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    createSize: (req, res) => {
        models.tb_size_width.bulkCreate(req.body.s_width)
        .then(_width => {
            return models.tb_size_thickness.bulkCreate(req.body.s_thickness)
            .then(_thickness => {
                return models.tb_size_length.bulkCreate(req.body.s_length)
                .then(_length => {
                    res.status(200).json(_length)
                })
            })
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    postSize: (req, res) => {
        switch (req.params.size) {
            case 'thickness':
                models.tb_size_thickness.create(req.body)
                .then(product => {
                    res.status(200).json(product)
                })
                break;
            case 'width':
                models.tb_size_width.create(req.body)
                .then(product => {
                    res.status(200).json(product)
                })
                break;
            case 'length':
                models.tb_size_length.create(req.body)
                .then(product => {
                    res.status(200).json(product)
                })
                break;
            default:
                res.status(201).json({sucess: true})
                break;
        }
    },

    updateSize: (req, res) => {
        switch (req.params.size) {
            case 'thickness':
                models.tb_size_thickness.findOne({
                    where: {
                        id: parseInt(req.params.id)
                    }
                }).then(product => {
                    return product.update(req.body)
                    .then( _data => {
                        res.status(200).json(_data)
                    })
                })
                break;
            case 'width':
                models.tb_size_width.findOne({
                    where: {
                        id: parseInt(req.params.id)
                    }
                }).then(product => {
                    return product.update(req.body)
                    .then( _data => {
                        res.status(200).json(_data)
                    })
                })
                break;
            case 'length':
                models.tb_size_length.findOne({
                    where: {
                        id: parseInt(req.params.id)
                    }
                }).then(product => {
                    return product.update(req.body)
                    .then( _data => {
                        res.status(200).json(_data)
                    })
                })
                break;
            default:
                res.status(201).json({sucess: true})
                break;
        }
    },

    deleteSize: (req, res) => {
        switch (req.params.size) {
            case 'thickness':
                models.tb_size_thickness.destroy({
                    where: {
                        id: parseInt(req.params.id)
                    }
                }).then(product => {
                    res.status(200).json(product)
                })
                break;
            case 'width':
                models.tb_size_width.destroy({
                    where: {
                        id: parseInt(req.params.id)
                    }
                }).then(product => {
                    res.status(200).json(product)
                })
                break;
            case 'length':
                models.tb_size_length.destroy({
                    where: {
                        id: parseInt(req.params.id)
                    }
                }).then(product => {
                    res.status(200).json(product)
                })
                break;
            default:
                res.status(201).json({sucess: true})
                break;
        }
    },

    createColor: (req, res) => {
        models.tb_color.create(req.body).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    updateColor: (req, res) => {
        models.tb_color.findOne({
            where: {
                id: req.params.id
            }
        }).then(product => {
            return product.update(req.body)
            .then( _data => {
                res.status(200).json(_data)
            })
        })
    },

    getPrefered: (req, res) => {
        models.tb_prefered.findAll({
            include: [
                {
                    model: models.tb_product,
                    where: {
                        id: Seq.col('tb_prefered.id_product')
                    }
                }
            ]
        })
        .then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    removePreffered: (req, res) => {
        models.tb_prefered.destroy({
            where: {
                id: req.params.id_preffer
            }
        }).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
    createPreffered: (req, res) => {
        models.tb_prefered.create(req.body).then(_data => {
            res.status(200).json(_data)
        }).catch(_err => res.status(_err.code | 500).send(_err))
    },
}