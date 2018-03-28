'use strict';

// grabbing the element from the dom
var userNameElement = document.getElementById('user');

// creating a validation prompt upon submit
// naming it validation to edit this later
function validateInput(event) {
  //self explanatory
  event.preventDefault();

  var userName = event.target.name.value;

  if (userName === '') {

    alert('Please enter valid username');

  } else {

    alert('Hello ' + userName + '!');
    localStorage.setItem('validateInput', JSON.stringify(userName));

    //loading game.html on click after user validation

    location.href = 'game.html';
  }

}

// event listener for above event function
userNameElement.addEventListener('submit', validateInput);


