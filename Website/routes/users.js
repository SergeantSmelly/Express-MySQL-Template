var express = require('express');
var router = express.Router();

// GET users listing
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;

/* 
routes (mounted on '/') and users (mounted on '/users'),
You may use both of them or only routes or you may even add more routers.
Please note that router.get('/', ... ) for the users router
means that the requested url is http://yourserver/users
and not http://yourserver/
*/
