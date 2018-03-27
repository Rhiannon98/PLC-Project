'use strict';

// grabbing the element from the dom
var userNameElement = document.getElementById('user');

// creating a validation prompt upon submit
// naming it validation to edit this later
function validateInput(event) {
  //self explanatory
  event.preventDefault();

  var userName = event.target.name.value;

  //proof of life
  alert('hello ' + userName + '!');
  localStorage.setItem('validateInput', JSON.stringify(userName));
}

// event listener for above event function
userNameElement.addEventListener('submit', validateInput);
