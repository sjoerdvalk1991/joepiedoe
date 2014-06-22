APP.geo= {

watchID: null,
options: {
frequency: 1000
},



startWatch: function() {

    APP.geo.watchID = navigator.geolocation.getCurrentPosition(APP.geo.onSucces, APP.geo.onError, APP.geo.options);

},
    
stopWatch: function() {
},
    
onSucces: function(position) {

   var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    },

onError: function(error) {
    
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    
}


}