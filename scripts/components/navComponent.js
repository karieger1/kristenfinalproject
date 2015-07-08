var React = require('react');
var NavComponent = React.createClass({
    render: function () {
        return (
          <div>
          
	          <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
		        <div class="container" id="navbar">
		            <div class="navbar-header">
		                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
		                    <i class="fa fa-bars"></i>
		                </button>
		                <a class="navbar-brand page-scroll" href="#page-top">TakeMyThings!
		                </a>
		            </div>

		            
		            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
		                <ul class="nav navbar-nav">
		                   
		                    <li class="hidden">
		                        <a href="#page-top"></a>
		                    </li>
		                    <li>
		                        <a class="page-scroll" href="#findThings">Find Things</a>
		                    </li>
		                    <li>
		                        <a class="page-scroll" href="#listThings">Get Rid of Things</a>
		                    </li>
		                    <li>
		                        <a class="page-scroll" href="#aboutUs">About Us</a>
		                    </li>
		                </ul>
		            </div>
		            
		        </div>
		      
		    </nav>
          </div>
        );
    }
});