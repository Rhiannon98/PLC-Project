'use strict';

// TODO : finish and work on game.js


// endPoint signifies beginning # user must get to 0 to win
var endPoint = 20;

//holding the various options
var optionArray = [];
//holding the varius player
var playerArray = [];

// obtaining element from the dom
var optionsElement = document.getElementById('options');

// obtaining localstorage info for saving progress
var progress = localStorage.getItem('playerArray');
playerArray = JSON.parse(progress);

// elements from the dom
// to be used to display the different options.
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');


// to go through local storage to see if name is a previous player
function checkName() {
  for (var n in playerArray) {
    if (playerName === n.name) {
      var player = n;
      return player;
    }
  }
}


// new player constructor
// TODO: get userName from app.js form
function Player(name, time, money, energy, distanceTravelled = 0) {
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distanceTravelled = distanceTravelled;
  playerArray.push(this);
}

// option constructor aids in making options for player to select from
// each option has either rewards or consequences for parameters
function Option(name, time, money, energy, distance) {
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distance = distance;
  optionArray.push(this);
}

// new option indices
var testOption1 = new Option('test', 5, 5, 5);
var testOption2 = new Option('test2', 3, 3, 3);
var testOption3 = new Option('test3', 1, 1, 1);

// click event for when user selects one of the above options
function optionClick(event) {

  var clickedOption = event.target.id;

  if (clickedOption === 'option1') {
    player.money -= 10;
    player.distanceTravelled += 3;
    console.log(player);
  } else if
  (clickedOption === 'option2') {
    player.time -= 10;
    player.distanceTravelled += 2;
    console.log(player);
  }
  else if
  (clickedOption === 'option3') {
    player.energy -= 10;
    player.distanceTravelled++;
    console.log(player);
  }
  if (player.distanceTravelled >= endPoint) {
    //this is where the game ends
    optionsElement.removeEventListener('click', optionClick);
    console.log('game won');
  }
  else if ((player.money <= 0) || (player.energy <= 0) || (player.time <= 0)) {
    optionsElement.removeEventListener('click', optionClick);
    console.log('game lost');
  }
  localStorage.setItem('playerArray', JSON.stringify(playerArray));
}



// 'calling' on the click event when user inputs
optionsElement.addEventListener('click', optionClick);

// calling on the checkName function on page load
checkName();






