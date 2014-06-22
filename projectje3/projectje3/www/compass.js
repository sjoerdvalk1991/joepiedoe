var compass = {

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
        //
        onSuccess: function(heading) {
            this.magneticHeading = heading.magneticHeading;
         
        },
    
        // onError: Failed to get the heading
        //
       onError:function(compassError) {
            alert('Compass error: ' + compassError.code);
        }
    };
