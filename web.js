var express = require('express');
var indexRouter = require('./repository/IndexRepository');

module.exports = function (app,res,req) {

	app.use('/static',express.static('public'));
	/* Index(main) route */
	app.get('/', indexRouter.Index);

};