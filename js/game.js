'use strict';

// TODO : finish and work on game.js

var endPoint = 20;

//holding the various options
var optionArray = [];
//holding the varius player
var playerArray = [];

var optionsElement = document.getElementById('options');

var progress = localStorage.getItem('playerArray');
playerArray = JSON.parse(progress);


function checkName() {
  for (var n in playerArray) {
    if (playerName === n.name) {
      var player = n;
      return player;
    }
  }
}



function Player(name, time, money, energy, distanceTravelled = 0) {
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distanceTravelled = distanceTravelled;
  playerArray.push(this);
}


function Option(name, time, money, energy, distance) {
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distance = distance;
  optionArray.push(this);
}

var testOption1 = new Option('test', 5, 5, 5);
var testOption2 = new Option('test2', 3, 3, 3);
var testOption3 = new Option('test3', 1, 1, 1);

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




optionsElement.addEventListener('click', optionClick);

checkName();






