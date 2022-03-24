var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/updatestats', (req, res, next) =>{
  res.render('index');
});

module.exports = router;
