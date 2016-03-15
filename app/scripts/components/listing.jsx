var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');


var PostListing = React.createClass({

render: function(){
  return(
  <div className="row">
    <div className="col-md-10 col-md-offset-1">
    <img src="https://images.unsplash.com/photo-1453282716202-de94e528067c?crop=entropy&dpr=2&fit=crop&fm=jpg&h=625&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=1200"/>
    </div>
    <div className="col-md-10 col-md-offset-1 caption-container">
      <p>
        "This is the caption for this Photo"
      </p>
    </div>
  </div>
    )
  }
});

module.exports = PostListing;
