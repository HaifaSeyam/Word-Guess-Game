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
var lettersGuessed = []; //Array to store all the guessed letters (either wrong or right)
var randomNumber; //Variable to store random number picked by computer

//Variables to display the guessed letters on the html document (screen)
var mGN = document.getElementById("movieGuessedName");

//When the progress bar is pressed start the game
function startGame() {
    //Once the game starts, the instructions will be hidden and the game will start
    var x = document.getElementById("instructions");
    x.style.display = "none";
    var y = document.getElementById("sideBar_hidden");
    y.style.display = "block";

    //As soon as the game starts, the computer will pick a random number falls between 0 and 9
    randomNumber = Math.floor(Math.random() * 10);

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
}