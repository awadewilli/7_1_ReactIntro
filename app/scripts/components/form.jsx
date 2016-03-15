var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');


var SubmitalForm = React.createClass({


addImage: function(e){
  e.preventDefault();
this.props.Collection.add($('.imageSubmit').value);
  console.log($('.imageSubmit').value)
  return this;

},
render: function(){
  return(
    <form className="imageSubmit row" onSubmit={this.addImage}>
    <div className="form-group col-md-12">
      <input type="text" name="imageURL" className="form-control"/>
      <input type="text" name="caption" className="form-control"/>
      <button className="btn btn-default" type="submit">Submit</button>
      <button className="btn btn-default" id="close" type="button" onClick={function(){$('#form-wrapper').addClass('hidden')}}>Close</button>
        </div>
    </form>
    )
  }
});

module.exports = SubmitalForm;
