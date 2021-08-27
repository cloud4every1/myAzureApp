var express = require('express');
var os = require('os');
var router = express.Router();

var networkInterfaces = os.networkInterfaces();

var firtIP = JSON.stringify(networkInterfaces[Object.keys(networkInterfaces)[0]]);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', ipaddress: firtIP });
});

module.exports = router;
