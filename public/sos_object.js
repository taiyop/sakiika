var mapOptions = {
  center: new google.maps.LatLng(34.693738, 135.502165),
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);

Parse.initialize("eyPDHAPXAjmDShgkSASmBE2bdcEoTbH7YEw6m5F8", "6vb1jDpFMc1i0r4Y4oK3VbqTq0er7kiEgIq35qls");

//##########################################
//####### RescueSignal ####################
//##########################################
var RescueSignal = Parse.Object.extend("RescueSignal");
var RescueSignalCollection = Parse.Collection.extend({
  model: RescueSignal
});
var rescue_signals = new RescueSignalCollection();
rescue_signals.fetch({
  success: function(collection) {
    collection.each(function(object) {
      setPurpleMaker(object);
      // console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function setPurpleMaker(object){
  var location = object.get("location");
  var myLatlng = new google.maps.LatLng(location.latitude, location.longitude);
  var image = 'sos2.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
  });
}

