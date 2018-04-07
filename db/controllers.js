var express = require('express');
var bodyParser = require('body-parser');
var model = require('./model-db.js');

module.exports = {
	get: function (req, res){
		model.handleGet().then((resolve) => res.end(JSON.stringify(resolve)).catch(err => console.log(err))
	},
	post: function(req, res){
		res.end('dude')
	}
}