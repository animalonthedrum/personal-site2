angular.module('myApp')
  .controller('menuController', menuController);

menuController.$inject = ['$location'];


function menuController($location) {
  var vm = this;


  vm.testClick = function() {
    console.log('test click');
    $location.path('/menu');
  };



}
