
var $ = require('jquery');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
  defaults:{
    'imageUrl':'https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?crop=entropy&dpr=2&fit=crop&fm=jpg&h=575&ixjsv=2.1.0&ixlib=rb-0.3.5&q=50&w=925',
    'caption' :'Crescent City, CA'
  }
});

var FormModel = Backbone.Model.extend({


});


var ImageCollection = Backbone.Collection.extend({

  model: Post,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/awadewilli_4'

});

module.exports = {
  'Post':Post,
  'ImageCollection':ImageCollection,
  'FormModel':FormModel
};
