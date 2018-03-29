'use strict';

//this gets the current player out of local storage
var currentPlayer = JSON.parse(localStorage.getItem('currentPlayer'));
var playersArray = JSON.parse(localStorage.getItem('playerArray'));


//get list element from DOM
var topPlayers = document.getElementById('leaders');
topPlayers.textContent = ('Here are the best players');
console.log('currentplayer = ', currentPlayer);

//function to sort through the playerArray by points for leaderboard
function compareInArray(a, b) {
  // sorts the scores in descending order
  return b.score - a.score;
}
//sorts array by player scores
playersArray.sort(compareInArray);

// displays the leader board on the page after going through the array
function displayLeaderboard() {
  // going through the length of playersArray (playerArray)
  for (var i in playersArray) {
    // getting the element from the playersArray!
    // new LeaderBoard(playersArray[i].name, finalScore);
    // creating an li element per player
    var leaderList = document.createElement('li');
    // populating the li element
    leaderList.textContent = playersArray[i].name + '>>>>>>>' + playersArray[i].score;
    // appending the child (li) to the parent (leaders)
    topPlayers.appendChild(leaderList);
  }
}
// calling so that the stuff renders
displayLeaderboard();