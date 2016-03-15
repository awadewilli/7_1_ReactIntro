var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var Models = require('./models/image.js');
var SubmitalForm = require('./components/form.jsx');
var PostListing = require('./components/listing.jsx');


var imageCollection = new Models.ImageCollection();

$('.add-image').click(function(){
$('#form-wrapper').removeClass('hidden');
});





ReactDOM.render(
  <SubmitalForm Collection={imageCollection}/>,
  document.getElementById('form-wrapper')
);
ReactDOM.render(
  <PostListing Collection={imageCollection}/>,
  document.getElementById('display-wrapper')
);
