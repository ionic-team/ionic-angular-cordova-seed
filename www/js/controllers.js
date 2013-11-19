angular.module('starter.controllers', [])


/**
 * The main controller for the app.
 */
.controller('AppCtrl', function($scope) {
})

.controller('PetsTabCtrl', function($scope, Pets) {
  $scope.pets = Pets.all();

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})

.controller('PetCtrl', function($scope, $routeParams, Pets) {
  $scope.pet = Pets.get($routeParams.petId);
});
