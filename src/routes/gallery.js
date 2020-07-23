
const gallery = require("../controller/gallery.controller")
const router = require('express').Router();

router.get('/all', gallery.getAll)
router.get('/detail/:id_gallery', gallery.getOne)


module.exports = router;