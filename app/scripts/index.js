var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
require('backbone-react-component');

var Models = require('./models/image.js');
var SubmitalForm = require('./components/form.jsx');
var PostListing = require('./components/listing.jsx');

$('.add-image').click(function(){
$('#form-wrapper').removeClass('hidden');
});

var imageCollection = new Models.ImageCollection();
imageCollection.fetch();


ReactDOM.render(
  React.createElement(SubmitalForm,{collection:imageCollection}),
  document.getElementById('form-wrapper')
);
ReactDOM.render(
  React.createElement(PostListing,{collection:imageCollection}),
  document.getElementById('display-wrapper')
);
