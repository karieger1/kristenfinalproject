var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ListingModel = require('../models/listingModel');

var listingCollection = Backbone.Collection.extend({
    model: ListingModel,
    parseClassName: 'listing',
});