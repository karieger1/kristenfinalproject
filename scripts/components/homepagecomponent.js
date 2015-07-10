var React = require('react');

module.exports = React.createClass ({
	render: function () {
		return (
			<div className="jumbotron" id="heading" styles="background:transparent !important">
		    	<body background="../images/background.jpg" /> 
			

					<strong><center><h1 id="logo">Take My Things!</h1></center></strong>

					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
					  			<p id="tmt">TakeMyThings! exists to connect people who want to get rid of things to people who need (or want!) those things.</p>
					  		</div>
					  	</div>
					</div>


					  <center><p><a className="btn btn-primary btn-lg" id="button1" href="#listThings" role="button">Get rid of things</a></p></center>
					  <center><p><a className="btn btn-primary btn-lg" id="button2" href="#findThingsMap" role="button">Find things</a></p></center>

				<center><section id="goals">Our goals are threefold:
					<ul class="tmtgoals">
						<li>1. Reduce waste</li>
						<li>2. Help others</li>
						<li>3. Have fun!</li>
					</ul>
				</section></center>
			</div>

		);
	}
});