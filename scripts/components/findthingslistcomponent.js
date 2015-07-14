var React = require('react');

module.exports = React.createClass({
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