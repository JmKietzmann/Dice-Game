
var dice = [1,2,3,4,5,6]
var diceOneSrc = document.getElementById("dice1");
var diceTwoSrc = document.getElementById("dice2");
var scoreP1 = 0
var scoreP2 = 0

function rollDice1() {
    
    var outcome =  Math.floor(Math.random() * 6);
    var outcome1 =  Math.floor(Math.random() * 6);
   
if (outcome === 0) {
   diceOneSrc.src = "Img/Side1.png";
} else if (outcome === 1){
    diceOneSrc.src = "Img/Side2.png";
} else if (outcome === 2){
    diceOneSrc.src = "Img/Side3.png";
} else if (outcome === 3){
    diceOneSrc.src = "Img/Side4.png";
} else if (outcome === 4){
    diceOneSrc.src = "Img/Side5.png";
} else if (outcome === 5){
    diceOneSrc.src = "Img/Side6.png";
}
   
if (outcome1 === 0) {
   diceTwoSrc.src = "Img/Side1.png";
} else if (outcome1 === 1){
    diceTwoSrc.src = "Img/Side2.png";
} else if (outcome1 === 2){
    diceTwoSrc.src = "Img/Side3.png";
} else if (outcome1 === 3){
    diceTwoSrc.src = "Img/Side4.png";
} else if (outcome1 === 4){
    diceTwoSrc.src = "Img/Side5.png";
} else if (outcome1 === 5){
    diceTwoSrc.src = "Img/Side6.png";
}
onWin(outcome, outcome1);
};


var player1 = outcome
var player2 = outcome1

function onWin(p1,p2){


    if (p1===p2) {
        document.getElementById("player1Notif").innerHTML = "Draw!";
        document.getElementById("player2Notif").innerHTML = "Draw!"; 
    } else if (p1 > p2) {
        document.getElementById("player1Notif").innerHTML = "Winner!";
        document.getElementById("player2Notif").innerHTML = "Loser!"; 
        scoreP1++;
        document.getElementById("scorePL1").innerHTML = scoreP1; 

    } else if (p1 < p2) {
        document.getElementById("player1Notif").innerHTML = "Loser!";
        document.getElementById("player2Notif").innerHTML = "Winner!"; 
        scoreP2++;
        document.getElementById("scorePL2").innerHTML = scoreP2; 

}};