var geo3 {

// Start watching the geolocation        
function startGeolocation(){
    var options = { timeout: 30000 };
    watchGeoID = navigator.geolocation.watchPosition(onGeoSuccess, onGeoError, options);
}
        
// Stop watching the geolocation
function stopGeolocation() {
    if (watchGeoID) {
        navigator.geolocation.clearWatch(watchGeoID);
        watchGeoID = null;
    }
}
        
// onSuccess: Get the current location
function onGeoSuccess(position) {
    document.getElementById('geolocation').innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude;
    myLat = position.coords.latitude;
    myLng = position.coords.longitude;
}
};