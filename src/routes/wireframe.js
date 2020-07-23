const wireFrame = require("../controller/wireframe.controller")

const router = require('express').Router();

router.get('/page/:page/lang/:id_lang', wireFrame.getWireframe)
router.get('/lang', wireFrame.getLang)

module.exports = router;