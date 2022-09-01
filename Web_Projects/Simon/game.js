var gamePattern=[];
var inputPattern=[];
var inputCount=0;
var level=0;
var gameOver=false;
var nextLevel=false;


function nextSequence(){
    nextLevel=false;
    level++;
    $("h1").text("Level "+level.toString());
    $("h1").css("color","#FEF2BF");

    var randomNumber= Math.floor( Math.random()*3 +1);
    var buttonColours=["red","blue","green","yellow"] ;
    var randomChosenColour =buttonColours[randomNumber] ;
    gamePattern.push(randomChosenColour);

   

    ClickEfect(randomChosenColour);


}
function ClickEfect(btnColour){
    //fade
    var idBtn="#"+btnColour;
    $(idBtn).fadeOut(200).fadeIn(200);
    //sound
    AudioPath="./sounds/"+btnColour+".mp3";
    var audio = new Audio(AudioPath);
    audio.play();

}
function newGame(){
    // initial variables to defult values
    gamePattern=[];
    inputPattern=[];
    inputCount=0;
    level=0;

    gameOver=false;
    nextLevel=false;
    $("h1").css("color","#FEF2BF");
    nextSequence(); //start level 1
  
}
function checkInputSequance(){  // note :correct !
    // check weather you entered the correct pattern
    for(var i=0;i<inputCount;i++){
        if(gamePattern[i]!=inputPattern[i]){
            gameOver=true;
            return 1;
        }
    }
    // go to next level
    if(inputCount==level){
        nextLevel=true;
    }
    return 0;
}

function GameOver(){
    $("h1").text("Game Over!");
  
    var audio = new Audio("./sounds/wrong.mp3")

    $("body").addClass("game-over");
    $("#level-title").text("Game Over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

}

    


$("#againBtn").click(function (e) { 
    newGame();

    $("h1").text("Level "+level.toString());
});
$(".Btn").on("click", function(e) {
    if( !gameOver){//note :debug this section !!!
        var color=$(this).attr("id")
      
        inputPattern.push(color);
        inputCount++;

        ClickEfect(color);
       

       
        if(inputCount<=level){
            if(nextLevel==false && gameOver==false) {
                $("h1").text("Level "+level.toString());
                $("h1").css("color","#FEF2BF");
    
                checkInputSequance();
                if(gameOver==true)
                {
                    GameOver();

                }
            }
            if( nextLevel == true  && gameOver==false){
              
                setTimeout(function(){
                    if(gameOver==false){
                        inputPattern=[];
                        inputCount=0;
                        nextSequence(); //next level
                    }
                 
                }, 1000); 
               
            } 

        }else{
            gameOver=true;
            GameOver();
        }
            
      
    
      
    
    }
    else{
    
         GameOver();
    }

 
});



