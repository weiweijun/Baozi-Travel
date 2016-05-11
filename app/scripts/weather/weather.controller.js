'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baoziApp
 */
angular.module('baoziApp')
  .controller('WeatherCtrl', ['$scope', '$mdMedia', function ($scope, $mdMedia){
      $scope.$mdMedia = $mdMedia;
    }]);


