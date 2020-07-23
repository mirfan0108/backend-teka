const router = require('express').Router();
var path = require('path');
var dir = path.join(__dirname, '..', '..' ,'static', 'images');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, dir+"/"+req.params.store)
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null,  'img-' + Date.now()+'.'+extension)
    }
})
var upload = multer({ storage: storage })
router.post('/image/:store', upload.single('fileimage'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})


module.exports = router;