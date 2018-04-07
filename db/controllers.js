var express = require('express');

var model = require('./model-db.js');

module.exports = {
	get: function (req, res){
		model.handleGet().then((resolve) => res.end(JSON.stringify(resolve))).catch(err => console.log(err))
	},
	post: function(req, res){
		model.handlePost(req.body).then((resolve) => res.end(JSON.stringify(resolve)))
	}
}

