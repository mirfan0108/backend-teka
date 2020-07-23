const router = require('express').Router();

const catalog = require('./catalog')
router.use('/catalog', catalog)

const masterfiles = require('./masterfile')
router.use('/masterfile', masterfiles)

const global = require('./global')
router.use('/global', global)

const webconf = require('./webconf')
router.use('/webconf', webconf)

const uploads = require('./upload')
router.use('/upload', uploads)

module.exports = router;