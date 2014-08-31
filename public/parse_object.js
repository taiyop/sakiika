Parse.initialize("eyPDHAPXAjmDShgkSASmBE2bdcEoTbH7YEw6m5F8", "6vb1jDpFMc1i0r4Y4oK3VbqTq0er7kiEgIq35qls");

//##########################################
//####### Uncomfortable ####################
//##########################################
var Uncomfortable = Parse.Object.extend("Uncomfortable");
var UncomfortableCollection = Parse.Collection.extend({
  model: Uncomfortable
});
var uncomfortables = new UncomfortableCollection();
uncomfortables.fetch({
  success: function(collection) {
    collection.each(function(object) {
      console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});

//##########################################
//####### ClosurePoint #####################
//##########################################
var ClosurePoint = Parse.Object.extend("ClosurePoint");
var ClosurePointCollection = Parse.Collection.extend({
  model: ClosurePoint
});
var closure_points = new ClosurePointCollection();
closure_points.fetch({
  success: function(collection) {
    collection.each(function(object) {
     console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function postClosurePoint(){
  var closure_point = new ClosurePoint();
  var point = new Parse.GeoPoint({latitude: 40.0, longitude: -30.0});
  closure_point.set("location", point);
  closure_point.save(null, {
    success: function(closure_point) {
      alert('New object created with objectId: ' + closure_point.id);
      location.reload(true);
    },
    error: function(closure_point, error) {
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
}

//##########################################
//####### ImageData #####################
//##########################################
var ImageData = Parse.Object.extend("ImageData");
var ImageDataCollection = Parse.Collection.extend({
  model: ImageData
});
var image_datas = new ImageDataCollection();
image_datas.fetch({
  success: function(collection) {
    collection.each(function(object) {
      console.log("=====image-data=====");
      console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});

