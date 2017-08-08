var clients = require('../models/clients.js');
var invoices = require('../models/invoices.js');
var employees =require('../models/employees.js')
var products = require('../models/products.js');
var product_categories = require('../models/product_categories.js');

module.exports = function(app){
	app.get('/api/sugar', function(req, res){
		console.log(res);
	});
};