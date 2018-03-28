'use strict';

//to store the leaders not obverwrite
var leaderArray = [];
//this gets the current player out of local storage
var currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
//
var finalScore = currentPlayer.energy + currentPlayer.time + currentPlayer.money;
//get list element from DOM
var leaderList = document.getElementById('leaders');
leaderList.textContent = ('Here are the best players');
console.log('currentplayer', currentPlayer);

//creates it's own <li>
var topPlayers = document.createElement('li');
topPlayers.textContent = (currentPlayer.name + ' ' + finalScore);
leaderList.appendChild(topPlayers);
//pushes top players into leaders array to be stored and displayed on the board

function LeaderBoard(name, score) {
  this.name = name;
  this.score = score;
  leaderArray.push(this);
}

console.log(leaderArray);

new LeaderBoard(currentPlayer.name, finalScore);


//function to sort through the playerArray by points for leaderboard
function compareInArray( a, b ){
  //TODO: Add a points system or change .points to be something else
  return b.points - a.points;
}
//sorts array by player scores
playerArray.sort(compareInArray);

//TODO: display sorted list on DOM
