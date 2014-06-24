/*
	Ik doe het even hier sinds dit oo kdeels om algemene shit gaat.
	
	Verwijder alle .js files enzo die je niet gebruikt, want nu zit je soms iets te lezen zonder dat het nuttig is
	Haal console.log's weg
	Haalf whitespaces e.d. weg
	Haal mid function comments weg
	
	Daarnaast zoals Rizki mij ook al op wees, maak eventueel gebruik van een namespace
		var APP = APP || {};

*/

(function () {
	'use strict';
    
	
    	var sensors = {
        	compass: null,
        	geo: null
    	}

	var controller = {
		init: function () {
            		compass.startWatch();
            		geo.startWatch();
            		geo.startgame(locaties);
            		navigator.splashscreen.hide();
            	}
    	}
    
    	var locaties = {
        	locatie1: {
            		naam: "De Dam",
            		lat: 52.373094,
            		long: 4.892535
        	}, locatie2: {
        		naam: "Rijksmuseum",
        		lat: 52.3599347,
        		long: 4.8849932
        	}, locatie3: {
        		naam: "Artis",
        		latitude: 52.366265,
			longitude: 4.9166406
    		}, locatie4: {
        		naam: "Dat leuke hotel",
        		latitude: 52.345864,
        		longitude: 4.918034
    		}, locatie5: {
        		naam: "Tropenmuseum",
        		latitude: 52.3576569,
        		longitude: 4.9259487
        	}, Locatie6: {
        		naam: "Station Amsterdam Zuid",
        		latitude: 52.3421159,
        		longitude: 4.869446
		}
	 }

	document.addEventListener("deviceready", controller.init, false);
})();
