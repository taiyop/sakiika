var mapOptions = {
  center: new google.maps.LatLng(34.693738, 135.502165),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);

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
      var location = object.get("location");
      setMaker(location.latitude, location.longitude);

      console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function setMaker(a, b){
  var myLatlng = new google.maps.LatLng(a,b);
  var image = 'green.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
  });
}

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
      var location = object.get("location");
      setRedMaker(location.latitude, location.longitude);

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
      // var location = object.get("location");
      // setRedMaker(location.latitude, location.longitude);
      location.reload(true);
    },
    error: function(closure_point, error) {
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
}

function setRedMaker(a, b){
  var myLatlng = new google.maps.LatLng(a,b);
  var image = 'red.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
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
      var location = object.get("location");
      setImgMaker(location.latitude, location.longitude);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function setImgMaker(a, b){
  var myLatlng = new google.maps.LatLng(a,b);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
  });
}

