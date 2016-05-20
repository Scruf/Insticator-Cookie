var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cookie = require('./Cookie');
var mongodbURI = "mongodb://ek5442:NokiaLumia920@ds033875.mongolab.com:33875/movies";
mongoose.connect(mongodbURI);
console.log("Inside this route");

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));

router.get('/',function(req,res,next){

	Cookie.find(function(err,data){
		if(err)
			throw err;
		else{
			
			res.send(data);
		}
	});
});

module.exports = router;
