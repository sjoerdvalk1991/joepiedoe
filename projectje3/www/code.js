
var locaties = {};
locaties['De Dam'] = {lat: "52.373094", lon: "4.892535"};
locaties['Rijksmuseum'] = {lat: "52.3599347", lon: "4.8849932"};
locaties['Artis'] = {lat: "52.366265", lon: "4.9166406"};
locaties['Dat fijne Hotel'] = {lat: "52.345864", lon: "4.918034"};
locaties['Tropenmuseum'] = {lat: "52.3576569", lon: "4.9259487"};
locaties['Station Amsterdam Zuid'] = {lat: "52.3421159", lon: "4.869446"};
 
document.addEventListener("deviceready", onDeviceReady, false); 

function onDeviceReady() {}
 

function populateDests()
{
 for (var key in locaties) {
 if (key === 'length' || !locaties.hasOwnProperty(key)) continue;
 $("#destinations").append('<li><a href="#" onClick="findDest(\'' + key + '\',' + locaties[key].lat + ',' + locaties[key].lon + ')";>' + key + '</a></li>');
 }
}
 
// Global variables.
var destinationPosition;
var destinationBearing;
var positionId;
var headingId;
var currentPosition;
var currentHeading;
 

function findDest(destination, lat, lon)
{
 $('#destinationText').html(destination);
 
 $('#navView').show();
 $('#mainView').hide();
 
 watchPosition();
 watchHeading();
 
destinationPosition = new LatLon(lat, lon);
 updateScreen();
}
 

function switchView(){
 $('#navView').hide();
 $('#mainView').show();
 
 if(positionId) navigator.geolocation.clearWatch(positionId);
 if(headingId) navigator.compass.clearWatch(headingId);
}
 
function watchPosition(){
 if(positionId) navigator.geolocation.clearWatch(positionId);
 positionId = navigator.geolocation.watchPosition(onPositionUpdate, onError, {
 enableHighAccuracy: true,
 timeout: 1000,
 maxiumumAge: 0
 });
}
 
function watchHeading(){
 if(headingId) navigator.compass.clearWatch(headingId);
 headingId = navigator.compass.watchHeading(onCompassUpdate, onError, {
 frequency: 100
 });
}
 

function onPositionUpdate(position){
 currentPosition = new LatLon(position.coords.latitude, position.coords.longitude);
 updateScreen();
}
 

function onCompassUpdate(heading){
 currentHeading = heading.trueHeading >= 0 ? Math.round(heading.trueHeading) : Math.round(heading.magneticHeading);
 updateScreen();
}
 
function updateScreen(){
 destinationBearing = Math.round(currentPosition.bearingTo(destinationPosition));
 $('#distance').html(Math.round(currentPosition.distanceTo(destinationPosition)*1000) + " Meters");
 
 var degreesOfDiff = destinationBearing - currentHeading; // The difference between destination bearing and current heading is the direction of the arrow.
 
 $('#arrow').css("-webkit-transform", "rotate(" + degreesOfDiff + "deg)");
}
 
// Error handler function.
function onError()
{
 console.log('Error');
}