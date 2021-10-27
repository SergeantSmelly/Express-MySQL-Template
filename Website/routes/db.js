var express = require('express');
// route app to db connection
var mysqlConnection = require('../utils/database');

var router = express.Router();

router.get('/', (req, res, next) => {});

module.exports = router;
