var React = require('react');
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var containerEl = document.getElementById("container");

var GiverDetail = require("./components/giverdetailcomponent");
var ItemDetail = require("./components/itemdetailcomponent");
var ListSuccess = require("./components/listsuccesscomponent");
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
		'giverDetail':     'giverDetail',
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
		// 	<FindThingsList />,
		// 	containerEl
		// );
	},
	itemDetail: function() {
		// React.render(
		// 	<ItemDetail />,
		// 	containerEl
		// );
	},
	giverDetail: function() {
		// React.render(
		// 	<GiverDetail />,
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
		// 	<ListSuccess />,
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