angular.module('starter', ['ionic', 'ngRoute', 'ngAnimate', 'starter.services', 'starter.controllers'])

.config(function ($compileProvider){
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($routeProvider, $locationProvider) {

  // Set up the initial routes that our app will respond to.
  // These are then tied up to our nav router which animates and
  // updates a navigation bar
  $routeProvider.when('/home', {
    templateUrl: 'templates/app.html',
    controller: 'AppCtrl'
  });

  $routeProvider.when('/pet/:petId', {
    templateUrl: 'templates/pet.html',
    controller: 'PetCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });

});

