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
      var location = object.get("location");
      setPurpleMaker(location.latitude, location.longitude);

      console.warn(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function setPurpleMaker(a, b){
  var myLatlng = new google.maps.LatLng(a,b);
  var image = 'purple.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
  });
}

