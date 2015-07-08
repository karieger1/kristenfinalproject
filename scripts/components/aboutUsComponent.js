var React = require('react');

module.exports = React.createClass ({
	render: function () {
		return (
			<div>
				<h1>About Us</h1>
					<p>TakeMyThings! is the brain-child of drunken philosophical conversations
					with friends. It is a culmination of principles I learned from my parents, and 
					opportunities I saw for myself.</p>

					<p>My father was employed by, then subsequently owned and operated waste management (trash) companies since I 
					was a wee child. I grew up conscious of the overabundance of trash that our population
					produced. Things like recycling, composting, and re-using were not socio-political concepts in our 
					household -- they were simply pragmatic ways of living. My mother brought her own tupperware
					to restaurants for her leftovers -- not because she was a styrofoam-hating hippie, but because it just
					made more sense. There was no talk of global warming or environmental science in our household -- there was
					just an underlying consciousness of the wastefullness that our species is prone to.</p>

					<img src="./images/kristentaco.jpg">
			</div>
		);
	}
});