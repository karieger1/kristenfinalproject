var listThings = React.createClass({
    render: function () {
        return (
          <div>
            <h1> List your item! </h1>

            	<form>
            		<div class="form-group">
				        <label for="inputName">Your name:</label>
				        <input type="text" class="form-control" id="inputName" placeholder="Joe Cool">
				    </div>
				    <div class="form-group">
				        <label for="inputPhone">Email:</label>
				        <input type="email" class="form-control" id="inputEmail" placeholder="Email">
				    </div>
				    <div class="form-group">
				        <label for="inputTel">Phone number:</label>
				        <input type='tel' class="form-control" pattern='[\(]\d{2}[\)]\d{4}[\-]\d{4}' id="inputTel" placeholder="512-555-5555"> 
				    </div>
				    <div class="form-group">
				        <label for="inputAddress">Street Address:</label>
				        <input type="text" class="form-control" id="inputAddress" placeholder="1212 Coolpeople Ln">
				    </div>
				    <div class="form-group">
				        <label for="inputZip">Zipcode:</label>
				        <input type="number" class="form-control" name="quantity" min="5" max="5" id="inputZip" placeholder="78704">
				    </div>
				    //category dropdown here
				    <div class="form-group">
				        <label for="inputDescr">Short description:</label>
				        <input type="text" class="form-control" id="inputDescr" placeholder="It usually works...">
				    </div>

				    //upload image here
				    <button type="submit" class="btn btn-primary">Login</button>
				</form>
           
          </div>
        );
    }
});