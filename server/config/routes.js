'use strict';

var path = require('path');
var express = require('express');

module.exports = function(app, passport){

	app.get('/form', function(req, res){
		res.render('form')
	});
	app.get('*', function(req, res){
		res.render('index');
	});
};