//I have copied this feature from Internet
function animate({duration, draw, timing}) {

    let start = performance.now();

requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    
    let progress = timing(timeFraction)
    draw(progress);
    
    if (timeFraction < 1) {
        requestAnimationFrame(animate);
    }
});
}

//Array of movies to be guessed 
var myMovies = ["ANTZ", "COCO", "FLINTSTONES", "INCREDIBLES", "MOANA", "PJMASKS", 
"SING", "STITCH", "ZOOTOPIA", "HEIDI"];
//Array to store right guessed letters
var lettersGuessed = [];
//Array to store wrong guessed letters
var wrongGuessing = [];
//Variable to store random number picked by computer
var randomNumber;
//Variable to store number of total guesses remaining (out of 9)
var totalGuesses = document.getElementById("totalGuesses"); 
var totalGuessesCounter = 9;
//Variable to store number of wrong guesses
var wrongGuesses = document.getElementById("wrongGuesses"); 
var wrongGuessesCounter = 0;
//Variable to store number of right guesses
var rightGuesses = document.getElementById("rightGuesses"); 
var rightGuessesCounter = 0;
//Variables to display the guessed letters on the html document (screen)
var mGN = document.getElementById("movieGuessedName");
var rGL = document.getElementById("wrongGuessedLetters");
//Variable to display alert messages into the bottom of the html document (screen)
var alertMsg = document.getElementById("alertMessage");
//Iteration variables
var k = 0, l = 0;
//Instructions and side-bar stored in variables to simplify displaying and hiding upon the flow of the game
var x = document.getElementById("instructions");
var y = document.getElementById("sideBar_hidden");
//Clicking Sound Variable
var pressSound = new Audio("assets/sounds/click.mp3");

//When the progress bar is pressed start the game
function startGame() {
    //Once the game starts, the instructions will be hidden and the game will start
    x.style.display = "none";
    y.style.display = "block";

    /*As soon as the game starts, the computer will pick a random number falls between 0 and 9 and sets the
    total number of guesses to 9 */
    randomNumber = Math.floor(Math.random() * 10);
    totalGuesses.innerHTML = totalGuessesCounter;
    wrongGuesses.innerHTML = wrongGuessesCounter;
    rightGuesses.innerHTML = rightGuessesCounter;

    /*if statements to check which element of the array (myMovies) will be displayed on the screen
     for guessing the name*/
     if(myMovies[randomNumber] == myMovies[0]){//if it is 1st element display Antz img
        x.innerHTML = "<img src='assets/images/antz.png' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[1]){//if it is 2nd element display Coco img
        x.innerHTML = "<img src='assets/images/coco.jpg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[2]){//if it is 3rd element display Flintstones img
        x.innerHTML = "<img src='assets/images/flintstones.jpg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[3]){//if it is 4th element display Incredibles img
        x.innerHTML = "<img src='assets/images/incredibles.jpeg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[4]){//if it is 5th element display Moana img
        x.innerHTML = "<img src='assets/images/moana.jpg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[5]){//if it is 6th element display PJMasks img
        x.innerHTML = "<img src='assets/images/pjmasks.jpg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[6]){//if it is 7th element display Sing img
        x.innerHTML = "<img src='assets/images/sing.jpeg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[7]){//if it is 8th element display Stitch img
        x.innerHTML = "<img src='assets/images/stitch.jpg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[8]){//if it is 9th element display Zootopia img
        x.innerHTML = "<img src='assets/images/zootopia.jpg' width=350px height=400px>";
     } else if(myMovies[randomNumber] == myMovies[9]){//if it is 10th element display Heidi img
        x.innerHTML = "<img src='assets/images/heidi.jpg' width=350px height=400px>";
     }
     
     //Style the selected image width and height and display it instead of the instructions 
     x.style.margin = "40px 150px";
     x.style.display = "block"; 

    //Display a number of dashed spaces "_" equal to the length of the chosen element of the array to be guessed
    for (var j = 0; j < myMovies[randomNumber].length; j++){
        lettersGuessed.push("_");
        mGN.innerHTML += lettersGuessed[j] + " ";
    }     
    //Start guessing the words by clicking on letters
    document.onkeyup = (function(event){
       //play the sound of pressing on the letter
       pressSound.play();
       //Call a function to check if it is a valid character
       if(chechIsValidLetter(event.key)){
          /*If it is a valid character then call a function to:
          - check the letter if it is matching any letter of the movie name
          - if yes then display it as right guess into the html document (screen)
          - if no the display it as wrong guess into the html document (screen)*/
          if (isMatching(event.key)) {displayIsMatching(event.key);}
          else {displayIsNotMatching(event.key)}
       } else {//if it is not a valid character display a message into the footer
          alertMsg.innerHTML = "Not a valid letter ... click anywhere to start again";
       }
    });
}

//Function to check if it is a valid character
function chechIsValidLetter(letter) {
   var asciiCode = letter.charCodeAt(0);
   if (asciiCode >= 97 && asciiCode <= 122) {return true;} 
   else {return false;}
   }

//Function to check if it is a matching letter (true) or not a matching letter (false)
function isMatching(letterPressed){
   letterPressed = letterPressed.toUpperCase();
      if (letterPressed === myMovies[randomNumber][k]){
         lettersGuessed[k] = letterPressed;
         k++;
         return true;
      } else {
         wrongGuessing[l] = letterPressed;
         l++;
         return false;
      }
   }

//Function to display the letter under the right guesses into the html document (screen) 
function displayIsMatching(letterPressed){
   letterPressed = letterPressed.toUpperCase();
   mGN.innerHTML = lettersGuessed;
   rightGuessesCounter++;
   rightGuesses.innerHTML = rightGuessesCounter;
   if (lettersGuessed.indexOf("_") === -1){
      alertMsg.innerHTML = "You Win !!!";
      restartGame();
   }
}

//Function to display the letter under the wrong guesses into the html document (screen) 
function displayIsNotMatching(letterPressed){
   letterPressed = letterPressed.toUpperCase();
   wrongGuessesCounter++;
   totalGuessesCounter--;
   wrongGuesses.innerHTML = wrongGuessesCounter;
   totalGuesses.innerHTML = totalGuessesCounter;
   rGL.innerHTML = wrongGuessing;
   if (totalGuessesCounter === 0){
      alertMsg.innerHTML = "You Lost !!!";
      restartGame();
   }
}

//Function to clear all fields for starting again
function clearAllFields(){
lettersGuessed = [];
wrongGuessing = [];
totalGuessesCounter = 9;
wrongGuessesCounter = 0;
rightGuessesCounter = 0;
totalGuesses.innerHTML = totalGuessesCounter;
wrongGuesses.innerHTML = wrongGuessesCounter;
rightGuesses.innerHTML = rightGuessesCounter;
mGN.innerHTML = "";
rGL.innerHTML = "";
alertMsg.innerHTML = "";
k = 0;
l = 0;
}

//Check if game need to be restarted
function restartGame(){
      clearAllFields();
      x.style.display = "block";
      y.style.display = "none";
      startGame();
}

