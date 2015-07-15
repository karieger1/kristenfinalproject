var Backbone = require('backparse')({
    appId: 'yJiZubO8JLzfUFse2nvE3MBFaO6o9IJSSzXSiOdi',
    apiKey: 'udxVtPHhV1pnBxfBHgkNEpMwv7OMTyLcM28KPLOC',
    apiVersion: 1
});

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