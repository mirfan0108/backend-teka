
const router = require('express').Router();
const product = require("../controller/product.controller")

router.get('/product', product.getProducts)
router.get('/product/:id_product', product.getOneProduct)
router.post('/product', product.createProduct)
router.delete('/product/:id_product', product.removeProduct)
router.put('/product/:id_product', product.updateProduct)

router.post('/size', product.createSize)
router.post('/size-one/type/:size', product.postSize)
router.put('/size/:id/type/:size', product.updateSize)
router.delete('/size/:id/type/:size', product.deleteSize)

router.post('/installation', product.createInstallation)
router.put('/installation/:id', product.updateInstallation)

router.post('/criteria-detail', product.createCriteriaDetail)
router.put('/criteria-detail/:id', product.updateCriteriaDetail)

router.post('/criteria-grading', product.createGradingCriteria)
router.put('/criteria-grading/:id', product.updateGradingCriteria)

router.post('/color', product.createColor)
router.put('/color/:id', product.updateColor)

router.post('/prefered', product.createPreffered)
router.get('/prefered', product.getPrefered)
router.delete('/prefered/:id_preffer', product.removePreffered)

module.exports = router;