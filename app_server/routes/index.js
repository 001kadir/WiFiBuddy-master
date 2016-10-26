var express = require('express');
var router = express.Router();

/* GET home page. */
var ctrlAnasayfa = require('../controllers/mekanlar');

var ctrlDigerleri = require('../controllers/digerleri');

router.get('/', ctrlAnasayfa.anasayfa);

router.get('/mekan', ctrlAnasayfa.mekanbilgisi);

router.get('/mekan/yorum/yeni', ctrlAnasayfa.yorumekle);

router.get('/hakkinda', ctrlDigerleri.hakkinda);


module.exports = router;
