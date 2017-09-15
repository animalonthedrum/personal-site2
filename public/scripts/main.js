$(document).ready(function() {
  console.log('JQ');
  AOS.init({
    // startEvent: 'scroll',
    // duration: 1300,
  });
});


console.log('JS');


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
