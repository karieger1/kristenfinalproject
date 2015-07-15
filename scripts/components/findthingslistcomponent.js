var React = require('react');
var listingCollection = require("../collections/listingCollection");



module.exports = React.createClass({

	componentWillMount: function() {
		var listings = new listingCollection();
		listings.fetch
	},
//call .map -- takes list of models and converts to react/html
	render: function () {
		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
					    	<h3 className="panel-title">Panel title</h3>
					</div>
					<div className="panel-body">
					    Panel content
					</div>
				</div>
			</div>
		);
	}
});