var express = require('express');
var router = express.Router();
var CONSTANT = require('../utils/constant');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    SUBJECT: CONSTANT.SUBJECT,
    DAY: CONSTANT.DAY,
    title: 'Thời khóa biểu' 
  });
});
router.get('/edittkb', function(req, res, next) {
  res.render('edittkb', { 
    SUBJECT: CONSTANT.SUBJECT,
    DAY: CONSTANT.DAY,
    title: 'Sửa thời khóa biểu' 
  });
});
router.get('/edittask', function(req, res, next) {
  res.render('edittask', { 
    SUBJECT: CONSTANT.SUBJECT,
    title: 'Sửa nhiệm vụ' 
  });
});

module.exports = router;
