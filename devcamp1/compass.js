APP.compass = {

watchID : null,
magneticHeading: null,
options: {
frequency: 1000
},


    // Start watching the compass
    //
    //deze functie is nodig door cordova die this vergeet waardoor ik het nogmaal toevoeg
    bind: function(scope){
    var _function = this;
    
    return function(){
    
    return _function.apply(scope, arguments);
        };   
    },
     
    startWatch: function() {


        this.watchID = navigator.compass.watchHeading(this.onSuccess.bind(this), this.onError, this.options);
     },
    
        // Stop watching the compass
        //
       stopWatch: function () {
            if (this.watchID) {
                navigator.compass.clearWatch(this.watchID);
                this.watchID = null;
            }
        },
    
        // onSuccess: Get the current heading
        // if else statement beschrijven, wat doet het in welke situatie?
        onSuccess: function(heading) {
            this.magneticHeading = heading.magneticHeading;
            var element = document.getElementById('heading');
            element.innerHTML = 'Heading: ' + heading.magneticHeading;
            
            if (heading.magneticHeading < 180 && heading.magneticHeading > 160){
                $('#vraag1').css("display", 'block');
             this.stopWatch()  
            }
            
            
            else {
               $('#vraag1').css("display", 'none');
                
     
            }
        },
    
        // onError: Failed to get the heading
        //
       onError:function(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    };
