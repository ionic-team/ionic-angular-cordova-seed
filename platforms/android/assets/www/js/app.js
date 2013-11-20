angular.module('starter', ['ionic', 'ngRoute', 'ngAnimate', 'starter.services', 'starter.controllers'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/templates/app.html',
    controller: 'AppCtrl'
  });

  $routeProvider.when('/pet/:petId', {
    templateUrl: '/templates/pet.html',
    controller: 'PetCtrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });

  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true);

});

