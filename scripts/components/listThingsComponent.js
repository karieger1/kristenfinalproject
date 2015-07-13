var React = require('react'); 
var validator = require('validator'); 
var ListingModel = require("../models/listingModel");


module.exports = React.createClass({
	
	render: function () {
		return (
			<div className="listingform">
				<h1> List your item! </h1>
				
					<form onSubmit={this.submitListing}>
						<input ref='title' label='title' placeholder='Title your listing' /><br/>
						<textarea ref='description' label="description">Describe your free thing!</textarea><br/>
						<input ref='condition' label='itemCondition' placeholder="Working, not working?" /><br/>
						<input ref='category' label='select' placeholder='Category' >
						      <option value='select'>Please select</option>
						      <option value='apparel'>Apparel/shoes</option>
						      <option value='bicycles'>Bicycles</option>
						      <option value='books'>Books</option>
						      <option value='electronics'>Electronics</option>
						      <option value='furniture'>Furniture</option>
						      <option value='instruments'>Instruments</option>
						      <option value='jewelry'>Jewelry</option>
						      <option value='kids'>Kids stuff</option>
						      <option value='sports'>Sports stuff</option>
						      <option value='toys'>Toys</option>
						      <option value='whatever'>Whatever?</option>
					    </input><br/>
					    <input ref='user' label='username' placeholder='Choose a username' /><br/>
					    <input ref="email" type="text" label="Email address" placeholder="dude@coolguy.com"/><br/>	
						<input ref="phone" type="text" label="Phone" placeholder="512-555-5555"/><br/>	
						<input ref="address" type="text" label="Street address" placeholder="123 Janky Dr"/><br/>	
						<input ref="zip" type="text" label="Zipcode" placeholder="78704"/><br/>	

						<button type='submit' value='Submit Button'>submit your listing </button>
					</form>
					
			</div>	
		);
	},

	submitListing: function(e) {
		e.preventDefault();
		var listingSubmit = new ListModel({
			title: this.refs.title.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			itemCondition: this.refs.condition.getDOMNode().value,
			category: this.refs.category.getDOMNode().value,
			userName: this.refs.user.getDOMNode().value,
			userEmail: this.refs.email.getDOMNode().value,
			userPhone: this.refs.phone.getDOMNode().value,
			userAddress: this.refs.address.getDOMNode().value,
			userZip: this.refs.zip.getDOMNode().value,

		});

		listingSubmit.save(null,{
				success: function(ListModel) {
					app.navigate('listSuccess', {trigger: true});
				}
			})
		}
				
	
});