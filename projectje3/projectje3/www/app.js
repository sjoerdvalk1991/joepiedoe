var APP = APP || {};

(function () {
	    'use strict';
	    
	    APP.settings = {
	    	compass: null,
	    	geo: null
	    }
	    
	    //var sensors = {
	    //    compass: null,
	    //    geo: null
	    //}
	    
	    APP.controller = {
		    init: function () {
		   
			    compass.startWatch();
			    //foursquare.search();
			    geo.startWatch();
			    geo.startgame(locaties);
			    navigator.splashscreen.hide();
		    },
	    }
	    
	    APP.locatie1 = {
	            naam: "De Dam",
	            lat: 52.373094,
	            long: 4.892535
	    }
	    
	    APP.locatie 2 = {
	    	     naam: "Rijksmuseum",
		     lat: 52.3599347,
		     long: 4.8849932	
	    }
	    
	    APP.locatie3 = {
	    	     naam: "Artis",
		     latitude: 52.366265,
		     longitude: 4.9166406	
	    }
	
	    APP.locatie4 = {
	   	     naam: "Dat leuke hotel",
		     latitude: 52.345864,
		     longitude: 4.918034 	
	    }
	    	
	   APP.locatie5 = {
	 	     naam: "Tropenmuseum",
		     latitude: 52.3576569,
		     longitude: 4.9259487  	
	   }
	        
	   APP.locatie6 = {
	   	     naam: "Station Amsterdam Zuid",
		     latitude: 52.3421159,
		     longitude: 4.869446	
	   }
        

    }

document.addEventListener("deviceready", APP.controller.init, false);

})();
