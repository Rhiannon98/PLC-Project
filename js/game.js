'use strict';
var endPoint = 100;

var optionsElement = document.getElementById('options');

function Option(name, time, money, energy) {

  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
}

var testOption = new Option('test', 5, 5, 5);

function optionClick(event) {

  var clickedOption = event.target.id;

  if(clickedOption === 'option1') {
    console.log(testOption);
  }

  // console.log(event.target.id);
}

optionsElement.addEventListener('click', optionClick);







