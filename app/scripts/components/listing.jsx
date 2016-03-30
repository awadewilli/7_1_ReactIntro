var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var _ = require('underscore');
require('backbone-react-component');

var PostListing = React.createClass({
mixins: [Backbone.React.Component.mixin],

render: function(){
  var allPosts = this.props.collection.map(function(model){
    console.log(model);
    return (
      <div key={model.get('_id')}>
        <img src={model.get('imageUrl')}/>
        <p>
          {model.get('caption')}
        </p>
      </div>
      )
  });
  console.log(allPosts);
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
