'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:FoodmapCtrl
 * @description
 * # FoodmapCtrl
 * Controller of the weather forecast module
 */
angular.module('baoziApp')
  .controller('FoodMapCtrl', ['$scope', '$mdMedia', function ($scope, $mdMedia){
    $scope.$mdMedia = $mdMedia;
  }]);


