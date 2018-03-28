'use strict';

//TODO: store the leaders not obverwrite
var leaderArray = [];
//this gets the current player out of local storage
var currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
var playersArray = JSON.parse(localStorage.getItem('playerArray'));
//
var finalScore = currentPlayer.energy + currentPlayer.time + currentPlayer.money;
//get list element from DOM
var topPlayers = document.getElementById('leaders');
topPlayers.textContent = ('Here are the best players');
console.log('currentplayer = ', currentPlayer);

//pushes top players into leaders array to be stored and displayed on the board
function LeaderBoard(name, score) {
  this.name = name;
  this.score = score;
  leaderArray.push(this);
}

console.log(leaderArray);

// new LeaderBoard(currentPlayer.name, finalScore);


//function to sort through the playerArray by points for leaderboard
function compareInArray(a, b) {
  // sorts the scores in descending order
  return b.score - a.score;
}
//sorts array by player scores
leaderArray.sort(compareInArray);

//TODO: display sorted list on DOM
function displayLeaderboard() {

  for (var i in playersArray) {
    new LeaderBoard(playersArray[i].name, finalScore);
  }
}

displayLeaderboard();