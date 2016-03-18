var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var _ = require('underscore');

var PostListing = React.createClass({

render: function(){

  var allPosts = this.props.collection.map(function(model){
    return (
      <div key={model.get('imageUrl')}>
        <img src={model.get('imageUrl')}/>
        <p>
          {model.get('caption')}
        </p>
      </div>
      )
  });

  return(
  <div className="row">
    <div className="col-md-10 col-md-offset-1">
    {allPosts}
    </div>
  </div>
    )
  }
});

module.exports = PostListing;
