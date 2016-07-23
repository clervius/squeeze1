'use strict';
 
var controller = require('./taxpayer.controller');
var express = require('express');
var router = express.Router();



router.post('/taxpayer/create', controller.createTaxpayer);

module.exports = router;
