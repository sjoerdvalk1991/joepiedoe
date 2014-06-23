//Deze code hebben we eerst gebruikt, maar uiteindelijk was het te lastig om dit te gebruiken in het concept.
//De gebouwen van de HVA gaven bijvoorbeeld meerdere venues terug. (Theo thijssenhuis, HVA, CMDA etc.)

    var foursquaredata ;
var url = "https://api.foursquare.com/v2/venues/search?ll="+position.coords.latitude+","+position.coords.longitude+"&query=&client_id=2POUFAUU4ZBJ2MTDOY3S2YHR2NIT52FYW0LUTPHBMNTJFJNQ&client_secret=YFDZI1YWV3ZI5S5SPM2DZJEQIEBPIDJ5XFZBWTIKIQZVQNYM&v=20120101";

$.getJSON(url,
    function(data) {
        foursquaredata = data;
        var counter =0;
    	console.log(data);
        var venlat = (data.response.venues[0].location['lat']); 
        var venlng = (data.response.venues[0].location['lng']);
        var venlat1 = (data.response.venues[1].location['lat']); 
        var venlng1 = (data.response.venues[1].location['lng']);
        var venlat2 = (data.response.venues[2].location['lat']); 
        var venlng2 = (data.response.venues[2].location['lng']);
        var venlat3 = (data.response.venues[3].location['lat']); 
        var venlng3 = (data.response.venues[3].location['lng']);
        var venlat4 = (data.response.venues[4].location['lat']); 
        var venlng4 = (data.response.venues[4].location['lng']);
        var venlat5 = (data.response.venues[5].location['lat']); 
        var venlng5 = (data.response.venues[5].location['lng']);
        var venlatlng = (venlat , venlng);
        var venlng = (data.response.venues[10].location['lng']);
        var venid = (data.response.venues[7]['id']);
        var venname1 =(data.response.venues[0]['name']);
        var venname2 =(data.response.venues[1]['name']);
        var venname3 =(data.response.venues[2]['name']);
        var venname4 =(data.response.venues[3]['name']);
        var venname5 =(data.response.venues[4]['name']);
        var venname6 =(data.response.venues[5]['name']);
        var venname7 =(data.response.venues[6]['name']);
        var venname8 =(data.response.venues[7]['name']);
        var venname9 =(data.response.venues[8]['name']);
        var arrayTest = [venname1, venname2, venname3, venname4, venname5, venname6, venname7, venname8];
        arrayLat = [venlat, venlat1, venlat2, venlat3];
        var arrayLng = [venlng, venlng1, venlng2, venlng3];
        console.log (venlat);
        console.log(venlng);
        
        console.log("ls");
        console.log(localStorage.getItem('locname'));
        var localnames = JSON.parse(localStorage.getItem('locname') || "[]");
        var i = 0;

        n = (localnames.length);
        for (i = 0; i <= (n-1); i++) {
	   var list1 = localnames[0];
        console.log(localnames[0]);
        }
        
        var latlocal   = JSON.parse(localStorage.getItem('latitude') || "[]");
        var m = 0;
        
        n = (latlocal.length);
        for (m = 0; m <= (n-1); m++){
        var listlat = latlocal[0];
        console.log(latlocal[0]);
        }
        
        
        
        
        var lnglocal  = JSON.parse(localStorage.getItem('longitude') || "[]");
        var k = 0;
        
        v = (latlocal.length);
        for (m = 0; m <= (n-1); m++){
        var listlng = lnglocal[0];
        console.log(lnglocal[0]);
        }
        
        var venname9 = localnames[0];
       
        document.getElementById("venuename").innerHTML = venname1 +'<br />';
    
        
        //function replace = venname1.replace(data.response.venues[4]['name']);
     
        
        $( "#next" ).click(function() {
            console.log(compass.magneticHeading);
            
        $( "#venuename" ).empty();
        var counter = $('.count');
        var currentThings = parseInt( counter.text() );
            currentThings++;
            counter.text(currentThings);
             var p1 = new LatLon(position.coords.latitude, position.coords.longitude);  
                    var p2 = new LatLon(arrayLat[-1+currentThings], arrayLng[-1+currentThings]);
              var brng = p1.bearingTo(p2);
                    console.log(brng + "dit is de hoek");
                    if {
                        brng
                    }else}
        document.getElementById("venuename").innerHTML = arrayTest[-1+currentThings] +'<br />';
    
//        var latloc = arrayLat[-1+currentThings]
   
                    
            
});
        
         
});
                            
