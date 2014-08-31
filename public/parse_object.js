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
      setMaker(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function setMaker(object){
  var location = object.get("location");
  var myLatlng = new google.maps.LatLng(location.latitude, location.longitude);
  var image = 'green.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title: object.get("time")
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

function postClosurePoint(latitude, longitude){
  var closure_point = new ClosurePoint();
  var point = new Parse.GeoPoint({latitude: latitude, longitude: longitude});
  closure_point.set("location", point);
  closure_point.save(null, {
    success: function(closure_point) {
      // alert('New object created with objectId: ' + closure_point.id);
      // var location = object.get("location");
      // setRedMaker(location.latitude, location.longitude);
      location.reload(true);
    },
    error: function(closure_point, error) {
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
}
function startPostClosurePoint(){
  google.maps.event.addListener(map, 'click', mylistener);
  alert('地図をクリックして、通行止め情報を送信してください。')
}

function mylistener(event) {
  postClosurePoint(event.latLng.lat(), event.latLng.lng());
  // document.getElementById("show_lat").innerHTML = event.latLng.lat();
  // document.getElementById("show_lng").innerHTML = event.latLng.lng();
  google.maps.event.remoteListener(map, 'click', mylistener);
}

function setRedMaker(a, b){
  var myLatlng = new google.maps.LatLng(a,b);
  var image = 'stopPoint.png';
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
      setImgMaker(object);
    });
  },
  error: function(collection, error) {
    // The collection could not be retrieved.
  }
});
function setImgMaker(object){
  var location = object.get("location");
  var a = location.latitude;
  var b = location.longitude;
  var image = object.get("imageData");
  // $("profileImg")[0].src = image.url();

  var myLatlng = new google.maps.LatLng(a,b);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
  });
  var myInfoWindow = new google.maps.InfoWindow({
        // 吹き出しに出す文
      content: "<a href='"+image.url()+"' target='_blank'><img src='"+image.url()+"' width=75 height75></img></a>",
  });
  google.maps.event.addListenerOnce(marker, "click", function(event) {
    myInfoWindow.open(map, marker);
  });

  google.maps.event.addListener(myInfoWindow, "closeclick", function() {
  });
}
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
  var image = 'sos2.png';
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: image,
      animation: google.maps.Animation.DROP,
      title:"Hello World!"
  });
}

