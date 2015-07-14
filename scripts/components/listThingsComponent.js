var React = require('react'); 
var validator = require('validator'); 
var ListingModel = require("../models/listingModel");

//Firebase shit: 
   // var myDataRef = new Firebase('https://lo5f0fmo6nq.firebaseio-demo.com/');
   //    $('#messageInput').keypress(function (e) {
   //      if (e.keyCode == 13) {
   //        var name = $('#nameInput').val();
   //        var text = $('#messageInput').val();
   //        myDataRef.set('User ' + Kristen + ' says ' + butts);
   //        $('#messageInput').val('');
   //      }
   //    });
module.exports = React.createClass({
	
	render: function () {
		return (
			<div className="listingform">
				<div className="container">
					<center><h2 id="listyouritem">List your item!</h2></center>
					
					<h3 id="aboutyou">About you:</h3>
					  <form role="form">
					    <div className="form-group">
					      Your name:
					      <input type="text" className="form-control" id="name" placeholder="Bo Jangles" />
					    </div>
					    <div className="form-group" input ref="email">
					     Email:
					      <input type="email" className="form-control" id="email" placeholder="bo@gmail.com" />
						</div>
						<div className="form-group" input ref="phone">
					     Phone number:
					      <input type="number" className="form-control" id="phone" placeholder="512-555-5555" />
						</div>
						<div className="form-group" input ref="address" >
					     Street address:
					      <input type="text" className="form-control" id="address" placeholder="123 Dancing Dr" />
						</div> 
						<div className="form-group" input ref="zip">
					     Zipcode:
					      <input type="number" className="form-control" id="zip" placeholder="78704" />
						</div> 


						<h3 id="aboutitem">About your item:</h3>        				  
    				  	
    				  	<div className="form-group">
					     Choose a title for your listing:
					      <input type="text" className="form-control" id="title" placeholder="Toaster oven" />
						</div> 
						<div className="form-group" input ref='description'>
					     Describe your item:
					      <input type="text" className="form-control" id="description" placeholder="Bought two years ago. Still works great!" />
						</div> 
						<div className="form-group" input ref='condition'>
					     Item condition:
					      <input type="text" className="form-control" id="condition" placeholder="Works 80% of the time." />
						</div> 
						<div className="form-group">
						Choose a category:
						<select ref='category' className="form-control" id="category">
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
					    </select>
					    </div>
					    <center><button type="button" id="submitlistingbutton" className="btn btn-primary" >
  							Submit your listing
						</button></center>

    				  </form>	

    			</div>
    		</div>	
		);
	},
				// <h1 id="listitem"><center> List your item! </center></h1>
				
				// 	<form id="listform" onSubmit={this.submitListing}>
				// 		<div className="input-group">
				// 			Listing title:<input ref='title' className="form-control" label='title' placeholder='Laser pistol' >
				// 		</div>
				// 		Describe your item:<textarea ref='description' label="description" placeholder="It shoots laser beams."></textarea><br/>
				// 		Item condition:<input ref='condition' label='itemCondition' placeholder="It works 80% of the time." /><br/>
				// 		Choose a category:<select ref='category'>
				// 		      <option value='select'>Please select</option>
				// 		      <option value='apparel'>Apparel/shoes</option>
				// 		      <option value='bicycles'>Bicycles</option>
				// 		      <option value='books'>Books</option>
				// 		      <option value='electronics'>Electronics</option>
				// 		      <option value='furniture'>Furniture</option>
				// 		      <option value='instruments'>Instruments</option>
				// 		      <option value='jewelry'>Jewelry</option>
				// 		      <option value='kids'>Kids stuff</option>
				// 		      <option value='sports'>Sports stuff</option>
				// 		      <option value='toys'>Toys</option>
				// 		      <option value='whatever'>Whatever?</option>
				// 	    </select><br/>
				// 	    Your name:<input ref='user' label='name' placeholder='Choose a username' /><br/>
				// 	    Email:<input ref="email" type="text" label="Email address" placeholder="dude@coolguy.com"/><br/>	
				// 		Phone:<input ref="phone" type="text" label="Phone" placeholder="512-555-5555"/><br/>	
				// 		Street address:<input ref="address" type="text" label="Street address" placeholder="123 Janky Dr"/><br/>	
				// 		Zipcode:<input ref="zip" type="text" label="Zipcode" placeholder="78704"/><br/>	

				// 		<button type='submit' value='Submit Button'>submit your listing </button>
					// </form>
					
		

	// submitListing: function(e) {
	// 	e.preventDefault();
	// 	var listingSubmit = new ListModel({
	// 		title: this.refs.title.getDOMNode().value,
	// 		description: this.refs.description.getDOMNode().value,
	// 		itemCondition: this.refs.condition.getDOMNode().value,
	// 		category: this.refs.category.getDOMNode().value,
	// 		userName: this.refs.user.getDOMNode().value,
	// 		userEmail: this.refs.email.getDOMNode().value,
	// 		userPhone: this.refs.phone.getDOMNode().value,
	// 		userAddress: this.refs.address.getDOMNode().value,
	// 		userZip: this.refs.zip.getDOMNode().value,

	// 	});

	// 	listingSubmit.save(null,{
	// 			success: function(ListModel) {
	// 				app.navigate('listSuccess', {trigger: true});
	// 			}
	// 		})
	// 	}
				
	
});