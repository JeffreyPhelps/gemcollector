
// Jeffrey Phelps DU Web Dev Bootcamp Week 4 Homework Gem Collector

// Sets up game sounds
var audio1 = document.createElement("audio");
audio1.src = "audio/chimes1.mp3";

var audio2 = document.createElement("audio");
audio2.src = "audio/chimes2.mp3";

var audio3 = document.createElement("audio");
audio3.src = "audio/chimes3.mp3";

var audio4 = document.createElement("audio");
audio4.src = "audio/chimes4.mp3";

var audio5 = document.createElement("audio");
audio5.src = "audio/youwon.mp3";

var audio6 = document.createElement("audio");
audio6.src = "audio/youlost.mp3";

var audio7 = document.createElement("audio");
audio7.src = "audio/reset.mp3";

// Sets up random background music
var bkgrndMusic = []
bkgrndMusic.push("audio/bkgrnd1.mp3");
bkgrndMusic.push("audio/bkgrnd2.mp3");
bkgrndMusic.push("audio/bkgrnd3.mp3");

var bkgrndAudio = document.createElement("audio");
bkgrndAudio.src = bkgrndMusic[Math.floor(Math.random() * bkgrndMusic.length)];

bkgrndAudio.play();

// Looping the background music
bkgrndAudio.addEventListener('ended', function(){
  this.currentTime = 0;
  this.play();
}, false);



// Pause background audio button
document.getElementById("musicButton").onclick = function() {
  bkgrndAudio.pause();
};


// Sets up the game when the document finishes loading
$( document ).ready(function(){

  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  var randomNum = Math.floor(Math.random()*101+19)

  // Appending random number to the randomNumber id in the html doc
  $('#randomNumber').text(randomNum);
 
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  var num1 = Math.floor(Math.random()*11+1)
  var num2 = Math.floor(Math.random()*11+1)
  var num3 = Math.floor(Math.random()*11+1)
  var num4 = Math.floor(Math.random()*11+1)

  //  Decaring variables for tallies 
  var userTotal = 0; 
  var wins = 0;
  var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //resets the game
  function reset(){
    randomNum = Math.floor(Math.random()*101+19);
    console.log(randomNum)
    $('#randomNumber').text(randomNum);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
  };

  //adds the wins to the userTotal
  function winner(){
    $('#winLossMessage1').text('You Won!');
    wins++; 
    $('#numberWins').text(wins);
    reset();
  };

  //addes the losses to the userTotal
  function loser(){
    $('#winLossMessage2').text('You Lost!');
    losses++;
    $('#numberLosses').text(losses);
    reset()
  };

  //sets up click for gem 1
  $('#one').on ('click', function(){
    audio1.play();
    $('#winLossMessage1').text('');
    $('#winLossMessage2').text('');
    userTotal = userTotal + num1;
    console.log("New userTotal = " + userTotal);
    $('#finalTotal').text(userTotal); 
    //sets win/lose conditions
    if (userTotal === randomNum){
      winner();
      audio5.play();
    }
    else if ( userTotal > randomNum){
      loser();
      audio6.play();
    }   
  });

  //sets up click for gem 2
  $('#two').on ('click', function(){
    audio2.play();
    $('#winLossMessage1').text('');
    $('#winLossMessage2').text('');
    userTotal = userTotal + num2;
    console.log("New userTotal = " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == randomNum){
      winner();
      audio5.play();
    }
    else if ( userTotal > randomNum){
      loser();
      audio6.play();
    } 
  });

  //sets up click for gem 3
  $('#three').on ('click', function(){
    audio3.play();
    $('#winLossMessage1').text('');
    $('#winLossMessage2').text('');
    userTotal = userTotal + num3;
    console.log("New userTotal = " + userTotal);
    $('#finalTotal').text(userTotal);
    //sets win/lose conditions
    if (userTotal == randomNum){
      winner();
      audio5.play();
    }
    else if ( userTotal > randomNum){
      loser();
      audio6.play();
    } 
  });

  //sets up click for gem 4
  $('#four').on ('click', function(){
    audio4.play();
    $('#winLossMessage1').text('');
    $('#winLossMessage2').text('');
    userTotal = userTotal + num4;
    console.log("New userTotal = " + userTotal);
    $('#finalTotal').text(userTotal); 
    //sets win/lose conditions 
    if (userTotal == randomNum){
      winner();
      audio5.play();
    }
    else if ( userTotal > randomNum){
      loser();
      audio6.play();
    }
  });

}); 

// Reset game button
document.getElementById("resetButton").onclick = function() {
  window.location.reload();
};