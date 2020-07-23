const router = require('express').Router();
const auth = require('../controller/auth.controller')

router.post('/token', auth.generateToken)
router.put('/setting/:id', auth.updateAccount)

module.exports = router;