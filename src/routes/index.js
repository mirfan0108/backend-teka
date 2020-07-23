const router = require('express').Router();
const { isAuth } = require('./middleware/auth.js')

const content = require('./wireframe')
router.use('/content', content)

const socmed    = require("../controller/socmed.controller")
router.use('/social-media', socmed.getAll)

const product = require('./product')
router.use('/menu', product)
router.use('/products', product)

const gallery = require('./gallery')
router.use('/project-gallery', gallery)



module.exports = router;