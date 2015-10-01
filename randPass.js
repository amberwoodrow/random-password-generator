// generate random number/ascii code. Use method fromCharCode to access the ascii value.
// Return string the length of the number argument.
var app = angular.module('myApp', []);

app.controller('appController', function($scope, $http){
  
  $scope.randPassword = function(passwordLength) {
    if (passwordLength >= 6 && passwordLength <= 20) {
      var password = "";
      for (var i=0; i<passwordLength; i++) {
        var randChar = String.fromCharCode(Math.floor(Math.random() * 90) + 32);
        password = password + randChar;
      }
      return password;
    }
    else {
      return "Please enter a number 6-20";
    }
  };
});