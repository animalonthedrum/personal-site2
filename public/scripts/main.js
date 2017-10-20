$(document).ready(function() {
  console.log('JQ');
  AOS.init({
    // startEvent: 'scroll',
    // duration: 1300,


  });


  $('.carousel').carousel();
  // $('.carousel2').carousel();
}); //end on ready
console.log('JS');


// Nav Function

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//end nav


// my map
