var express = require ('express');
var router = express.Router();
var fs=require('fs')


router.get('/', function(req, res){
    res.render('index', {title: 'Express'});
});

router.get('totxt', function(req, res){
    fs.appendFileSync(car.hbs, req.query.brand+ ' ' +req.query.year+ ' ' + req.query.color + ' ' + req.query.price +'.')
})


module.exports = router;