(function () {
	'use strict';
    APP.settings = {
    
    watchID: null,
    options: { frequency: 30 }
        
    };
        
    

APP.quiz = {
    correctAnswer: null,
    usedQuestion: null,
    invert: false,
    
    init: function (){
        APP.geo.startWatch();
        $("#startapp").click(function(){
            APP.quiz.startQuiz();
        });
    },
    
    startQuiz: function(){
        APP.compass.startWatch();
        $('#intro').css("display", 'none');
        console.log('start quiz');
        var question = APP.quiz.getQuestions();
        APP.quiz.displayQuestion(question);
    
    },
    
    getQuestions: function(heading){
        
        
        var returnValue = {
            
      'city' : {
      0 : 'rome',
      1 : 'parijs'
      },
      'imageUrl' : {
      0 : 'http://www.eurocamp.nl/images/activities/city-holidays-images/ROME.jpg',
      1 : 'http://www.eurocamp.nl/images/activities/city-holidays-images/PARIS.jpg'
      }
       };
        
        if (APP.quiz.invert){
        APP.quiz.correctAnswer = returnValue.city[1];}
        else {
            APP.quiz.correctAnswer = returnValue.city[0];
        }
            
        
        return returnValue;
    },
    
    
    
    displayQuestion: function(question){
        console.log(question.imageUrl[0]);

        $('#answerOne').css("background-image", "url(" + question.imageUrl[0] +")");
        $('#answerTwo').css("background-image", "url(" + question.imageUrl[1] + ")");
        $('#answerOne').attr('id', question.city[0]);
        $('#answerTwo').attr('id', question.city[1]);
        console.log(question.city[0]);
   
        APP.quiz.checkAnswer(question);
    
    },
    
    checkAnswer: function(question){
        
$('#'+question.city[0]).click(function(){
    
    console.log('pressed : ' + question.city[0]);
    
    if (question.city[0] == APP.quiz.correctAnswer)
    {
        console.log('correct');
    }
    
     else {console.log('incorrect');
          }

    APP.quiz.invert = true;
    APP.quiz.startQuiz ();
 /*   $('#parijs').addClass('animated shake');
$('#parijs').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){$('#parijs').removeClass('animated shake');});*/
});
        

        
$('#'+question.city[1]).click(function(){
    
    
    console.log('ik doe het ook');
    
    
    if (question.city[1] == APP.quiz.correctAnswer)
    {console.log('correct');
    }
    else {console.log('incorrect');
          $('#'+question.city[1]).addClass('animated shake');
          $('#'+question.city[1]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){('#'+question.city[1]).removeClass('animated shake');}); 
         }
    
   APP.quiz.invert = true;
   APP.quiz.startQuiz(); 


    
    
});
        

        
        
    }  
};
    

    
    
    
    document.addEventListener("deviceready", APP.quiz.init); 
})();

