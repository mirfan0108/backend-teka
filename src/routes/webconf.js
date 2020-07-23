
const router = require('express').Router();
const webconf = require("../controller/webconf.controller")

router.get('/banner', webconf.getBanner)
router.get('/banner/:id_banner', webconf.getOneBanner)
router.post('/banner', webconf.createBanner)
router.put('/banner/:id_banner', webconf.modifyBanner)
router.delete('/banner/:id_banner', webconf.deleteBanner)

router.get('/tnc', webconf.getTnc)
router.get('/tnc/:id_tnc', webconf.getOneTnc)
router.put('/tnc/:id_tnc', webconf.updateTnc)

router.get('/policy', webconf.getPolicy)
router.get('/policy/:id_privacy_policy', webconf.getOnePolicy)
router.put('/policy/:id_privacy_policy', webconf.updatePolicy)

router.get('/promotion', webconf.getPromo)
router.get('/promotion/:id_promotion', webconf.getOnePromo)
router.put('/promotion/:id_promotion', webconf.updatePromo)

router.get('/faq', webconf.getFaq)
router.post('/faq', webconf.createFaq)
router.put('/faq/:id_faq', webconf.updateFaq)
router.delete('/faq/:id_faq', webconf.deleteFaq)

router.get('/video', webconf.getVideo)
router.put('/video/:id_content', webconf.updateVideo)

router.get('/profile', webconf.getProfile)
router.put('/profile-all', webconf.updateProfileAll)
router.put('/profile/:id', webconf.updateProfile)

router.put('/why-us/:id', webconf.updateWhyUs)

router.get('/partner', webconf.getPartners)
router.post('/partner', webconf.createNewPartner)
router.delete('/partner/:id', webconf.destroyPartner)
router.put('/partner/:id', webconf.updatePartner)

router.get('/certification', webconf.getCert)
router.post('/certification', webconf.createCert)
router.delete('/certification/:id', webconf.destroyCert)
router.put('/certification/:id', webconf.updateCert)

module.exports = router;