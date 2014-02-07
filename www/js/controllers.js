angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('MapIndexCtrl', function($scope, PetService) {
    $scope.map = {
        defaults: {
            tileLayer: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            maxZoom: 14,
            zoomControlPosition: 'bottomleft',
            path: {
                weight: 10,
                color: '#800000',
                opacity: 1
            }
        },
        center: {
            lat: 44.52,
            lng: -122.68,
            zoom: 5
        }
    };
})


// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.pet = PetService.get($stateParams.petId);
});
