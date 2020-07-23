
const router = require('express').Router();
const global = require("../controller/global.controller")

router.get('/testimonial', global.getTestimonial)
router.get('/testimonial/:id_testimoni', global.getOneTestimonial)
router.put('/testimonial/:id_testimoni', global.updateTestimonial)
router.delete('/testimonial/:id_testimoni', global.deleteTestimonial)
router.post('/testimonial', global.postTestimonial)

router.get('/gallery', global.getGallery)
router.get('/gallery/:id_gallery', global.getOneGallery)
router.put('/gallery/:id_gallery', global.updateGallery)
router.delete('/gallery/:id_gallery', global.deleteGallery)
router.post('/gallery', global.createGallery)

router.delete('/image-gallery/:id_image', global.deleteImageGallery)
router.post('/image-gallery', global.addImageGallery)

module.exports = router;