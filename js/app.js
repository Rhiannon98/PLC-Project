'use strict';

var userNameElement = document.getElementById('user');

function validateInput(event){
  event.preventDefault();
  console.log(event.target.name.value);
}

userNameElement.addEventListener('click', validateInput);