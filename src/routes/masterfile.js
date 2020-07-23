
const router = require('express').Router();
const product = require("../controller/product.controller")

router.get('/construction', product.getConstruction)
router.post('/construction', product.createConstruction)
router.delete('/construction/:id_construction', product.removeConstruction)
router.put('/construction/:id_construction', product.modifyConstruction)

router.get('/species', product.getSpecies)
router.post('/species', product.createSpecies)
router.delete('/species/:id_specie', product.removeSpecies)
router.put('/species/:id_specie', product.modifySpecies)

module.exports = router;