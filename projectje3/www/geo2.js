var geo = {
    watchID: null,
    myLat: null,
    myLon: null,
    options: {
        frequency: 1000
    },
    startWatch: function() {

        geo.watchID = navigator.geolocation.getCurrentPosition(geo.onSucces, geo.onError, geo.options);

    },

    stopWatch: function() {
    },

    onSucces: function(position) {


       var element = document.getElementById('geolocation');
            element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                                'Longitude: ' + position.coords.longitude     + '<br />' +
                                '<hr />'      + element.innerHTML;

        position.coords.latitude = myLat;
        position.coords.longitude = myLon;



    },
    
     startgame3: function(locaties) {
    
    document.getElementById("venuename").innerHTML = locaties.locatie3.naam +'<br />';
    document.getElementById("volgende2").style.display="none";
    document.getElementById("next3").style.display="block";
    document.getElementById("volgende2").style.display="none";
    var p5 = new LatLon(52.3598956, 4.9084882);
        console.log(p3);
        var p6 = new LatLon(locaties.locatie3.lat, locaties.locatie3.long);
        console.log(locaties.locatie2.lat, locaties.locatie2.long);
        var brng2 = p3.bearingTo(p4);
        console.log(brng2 + "dit is de hoek");
        console.log(p3);
          
          
       $( "#next3" ).click(function() {
             console.log(compass.magneticHeading - brng2);
             if (compass.magneticHeading - brng2 >= -5 && compass.magneticHeading - brng2 <= 5) {
                 document.getElementById("venuename").innerHTML = "WELL DONE!";
                 document.getElementById("next3").style.display="none";
                 document.getElementById("volgende3").style.display="block";
             } else {
                 console.log('incorrect');
         }
        $ ("#volgende3" ).click(function() {
            geo.startgame3(locaties);
        });
        });
    
     },
    
    
      startgame2: function(locaties) {
    
    var counter = $('.count');
    var currentThings = parseInt( counter.text() );
    currentThings++;
    counter.text(currentThings);
    document.getElementById("venuename").innerHTML = locaties.locatie2.naam +'<br />';
    document.getElementById("volgende").style.display="none";
    document.getElementById("next2").style.display="block";
    document.getElementById("volgende2").style.display="none";
    var p3 = new LatLon(52.3598956, 4.9084882);
        console.log(p3);
        var p4 = new LatLon(locaties.locatie2.lat, locaties.locatie2.long);
        console.log(locaties.locatie2.lat, locaties.locatie2.long);
        var brng2 = p3.bearingTo(p4);
        console.log(brng2 + "dit is de hoek");
        console.log(p3);
          
          
       $( "#next2" ).click(function() {
             console.log(compass.magneticHeading - brng2);
             if (compass.magneticHeading - brng2 >= -20 && compass.magneticHeading - brng2 <= 20) {
                 document.getElementById("venuename").innerHTML = "WELL DONE!";
                 document.getElementById("next2").style.display="none";
                 document.getElementById("volgende2").style.display="block";
             } else {
                 console.log('incorrect');
         }
        $ ("#volgende2" ).click(function() {
            geo.startgame3(locaties);
        });
        });
    
    
    },


    startgame: function(locaties) {
        console.log(locaties);

        document.getElementById("venuename").innerHTML = locaties.locatie1.naam +'<br />';
        var p1 = new LatLon(52.3598956, 4.9084882);
        console.log(p1);
        var p2 = new LatLon(locaties.locatie1.lat, locaties.locatie1.long);
        console.log(locaties.locatie1.lat, locaties.locatie1.long);
        var brng = p1.bearingTo(p2);
        console.log(brng + "dit is de hoek");
        console.log(p2);
        
         $( "#next" ).click(function() {
             console.log(compass.magneticHeading - brng);
             if (compass.magneticHeading - brng >= -20 && compass.magneticHeading - brng <= 20) {
                 document.getElementById("venuename").innerHTML = "WELL DONE!";
                 document.getElementById("next").style.display="none";
                 document.getElementById("volgende").style.display="block";
             } else {
                 console.log('incorrect');
         }
        $ ("#volgende" ).click(function() {
            geo.startgame2(locaties);
        });
        });

    },
    
  





    onError: function(error) {

            alert('code: '    + error.code    + '\n' +
                    'message: ' + error.message + '\n');

    }
    

};   

