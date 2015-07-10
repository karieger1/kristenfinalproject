var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var containerEl = document.getElementById("container");

var ListThings = require("./components/listThingsComponent");
var FindThingsList = require("./components/findthingslistcomponent");
var FindThingsMap = require("./components/findThingsMapComponent");
var AboutUs = require('./components/aboutUsComponent');
var NavComponent = require('./components/navcomponent');
var HomePage = require("./components/homepagecomponent");

var ListingCollection = require('./collections/listingCollection');

var listingModel = require("./models/listingModel");

//render navbar

// React.render(
// 	<NavComponent />,
//  	document.getElementById("navbar")
//  	);

//set up router:

var App = Backbone.Router.extend({

	routes: {
		'': 		       'home',
		'home': 		   'home',
		'findThingsMap':   'findThingsMap',
		'itemDetail': 	   'itemDetail',
		'findThingsList':  'findThingsList',
		'giverInfo':       'giverInfo',
		'listThings':      'listThings',
		'listSuccess':     'listSuccess',
		'aboutUs': 	       'aboutUs'
	},

	home: function() {
		 React.render(
		 	
			<HomePage />,
			containerEl
		 	
		 );
	},
	findThingsMap: function() {
		 React.render(
		 	<FindThingsMap />,
		 	containerEl
		 );
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
		// 	<ListThings />,
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
		console.log('about us')
		 React.render(
		 	<AboutUs />,
		 	containerEl
		 );
	}
});

var myApp = new App();

Backbone.history.start();