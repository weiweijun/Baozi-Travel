/**
 * Created by tianhengzhou on 3/27/16.
 */
var express = require('express'),
    controller = require('./weather.controller');

var router = express.Router();

router.get('/weather/:city', controller.index);

module.exports = router;
