var myDataRef = new Firebase("https://radiant-fire-677.firebaseio.com/");

var Backbone = require("backbone");
Backbone.$ = require("jquery");

module.exports = Backbone.Model.extend({
	defaults: {
		objectId: null,
		title: "",
		description: "",
		itemCondition: "",
		category: "",
		location : {
            "lat" : null,
            "long" : null,
        },//make this an object
		userID: "",
		userName: "",
		userEmail: "",
		userPhone: "",
		userAddress: "",
		userZip: null,
		itemImage: "",
		createdAt: null
	},

	parseClassName: 'listing',
    idAttribute: 'objectId'
});