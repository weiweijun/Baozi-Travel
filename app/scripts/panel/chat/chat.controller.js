'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:FoodmapCtrl
 * @description
 * # FoodmapCtrl
 * Controller of the weather forecast module
 */
angular.module('baoziApp')
  .constant('FirebaseUrl', 'https://popping-heat-9212.firebaseio.com')
  .controller('ChatCtrl', ['$scope', '$mdMedia', '$firebaseObject',
    function($scope, $mdMedia, $firebase){
      var ref = new Firebase(FirebaseUrl);
      $scope.$mdMedia = $mdMedia;
      $scope.message = $firebase(ref);
      $scope.addMessage = function(e) {
        if (e.keyCode != 13) return;
        $scope.messages.$add({from: $scope.name, body: $scope.msg});
        $scope.msg = "";
      }
  }]);


