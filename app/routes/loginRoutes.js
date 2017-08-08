// require models
var db = require("../models/index.js");
// require passport and sequelize
var passport = require('passport');
var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

// Generic function to redirect if user is not logged in
function loggedIn(req, res, next) {
	console.log("All good");
	if (req.user) {
		next();
	} else {
		res.redirect('/login');
	}
}

module.exports = function(app){
	
	app.get('/', loggedIn, function(req, res) {
		console.log("fetching");
		db.Clients.findAll({
			where: {
				employee_id: req.user.id
			}
			// include: [{
			// 	model: db.Invoices
			// }],
			//  order: [
			// // 	[db.Invoices, 'date_created', 'DESC']
			// // ]
		}).then(function(data){
			// res.json(data);
			console.log("I'm here");
			res.render('dashboard',{
				isAuthenticated: req.isAuthenticated(),
				user: req.user,
				myClients: data
			});
		});

	});

	app.get('/login', function(req, res){
		res.render('login');
	});

	app.get('/logout', function(req, res){
		// logout method added by passport
		req.logout();	
		res.redirect('/');
	});

	
	app.post('/login', passport.authenticate('local'), function(req, res){
		console.log("I work");
		res.redirect('/');
	});
	
};