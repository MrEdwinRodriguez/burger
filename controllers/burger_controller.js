
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');



router.get('/', function(req,res) {
	res.redirect('/burger')
});

router.get('/burger', function(req,res) {
	burger.selectAll(function(data){
		var hbsObject = {burger : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});



router.post('/burger/create', function(req,res) {
	burger.insertOne(['name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burger');
	});
});



module.exports = router;