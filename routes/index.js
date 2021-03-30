var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*retrieves last time page was visited*/
var last_visit = "";

router.get('/last.txt', function(req, res, next){
    last_visit = Date();
    res.send(last_visit);
});

module.exports = router;
