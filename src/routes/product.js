
const product = require("../controller/product.controller")
const router = require('express').Router();

router.get('/product-construction', product.getConstruction)

router.get('/all', product.getProducts)
router.get('/detail/:id_product', product.getOneProduct)
router.get('/species', product.getSpecies)
router.get('/construction', product.getConstruction)


module.exports = router;