'use strict';
var endPoint = 100;

var optionsElement = document.getElementById('options');

function Option(name, time, money, energy) {

  this.name = name;
  this.time = time;
  this.money = money;
  this.energy = energy;
}

var testOption1 = new Option('test', 5, 5, 5);
var testOption2 = new Option('test2', 3,3,3);
var testOption3 = new Option('test3', 1, 1, 1);

function optionClick(event) {

  var clickedOption = event.target.id;

  if(clickedOption === 'option1') {
    console.log('option 1');
  } else if
  (clickedOption === 'option2') {
    console.log('option 2');
  }
  else if
  (clickedOption === 'option3'){
    console.log('option 3');
  }
}


optionsElement.addEventListener('click', optionClick);







