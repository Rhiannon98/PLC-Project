'use strict';
var endPoint = 10;

var optionArray = [];

//TODO: pull from local storage (test name is ted)
var playerName = 'ted';

var optionsElement = document.getElementById('options');

function Player(name, time, money, energy, distanceTravelled = 0){
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distanceTravelled = distanceTravelled;
}

var testPlayer = new Player(playerName, 10, 10, 10);

function Option(name, time, money, energy, distance) {
  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
  this.distance = distance;
  optionArray.push(this);
}

var testOption1 = new Option('test', 5, 5, 5);
var testOption2 = new Option('test2', 3,3,3);
var testOption3 = new Option('test3', 1, 1, 1);

function optionClick(event) {

  var clickedOption = event.target.id;

  if(clickedOption === 'option1') {
    testPlayer.money--;
    testPlayer.distanceTravelled +=3;
    console.log(testPlayer);
  } else if
  (clickedOption === 'option2') {
    testPlayer.time--;
    testPlayer.distanceTravelled +=2;
    console.log(testPlayer);
  }
  else if
  (clickedOption === 'option3'){
    testPlayer.energy++;
    testPlayer.distanceTravelled ++;
    console.log(testPlayer);
  }
  if (testPlayer.distanceTravelled >= endPoint){
    //this is where the game ends
    optionsElement.removeEventListener('click', optionClick);
    console.log('game end');
  }
}




optionsElement.addEventListener('click', optionClick);







