var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

console.log('application running');

//set up router:

var App = Backbone.Router.extend({
	routes: {
		'': 'home',
		'home': 'home',
		'findThingsMap':   'findThingsMap',
		'itemDetail': 	   'itemDetail',
		'findThingsList':  'findThingsList',
		'giverInfo':       'giverInfo',
		'listThings':      'listThings',
		'listSuccess':     'listSuccess',
		'aboutUs': 	       'aboutUs'
	},
	home: function() {
		// React.render(
		// 	<HomePage categories={cat} />,
		// 	containerEl
		// );
	},
	findthingsMap: function() {
		// React.render(
		// 	<CategoryPage />,
		// 	containerEl
		// );
	},
	findThingsList: function() {
		// React.render(
		// 	<CategoryPage />,
		// 	containerEl
		// );
	},
	itemDetail: function() {
		// React.render(
		// 	<CategoryPage />,
		// 	containerEl
		// );
	},
	giverInfo: function() {
		// React.render(
		// 	<CategoryPage />,
		// 	containerEl
		// );
	},
	listThings: function() {
		// React.render(
		// 	<CategoryPage />,
		// 	containerEl
		// );
	},
	listSuccess: function() {
		// React.render(
		// 	<SearchPage />,
		// 	containerEl
		// );
	},
	aboutUs: function() {
		// React.render(
		// 	<ProductPage />,
		// 	containerEl
		// );
	}
});

var myApp = new App();

Backbone.history.start();