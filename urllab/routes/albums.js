var express = require('express');
var router = express.Router();

let locate = require('../controller/albums')

router.get('/',locate.noSearch);

router.get('/:id', locate.locateAlb);

module.exports = router;