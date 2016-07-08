'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the baoziApp
 */
angular.module('baoziApp')
  .controller('WeatherCtrl', function ($scope, $mdMedia){
      $scope.$mdMedia = $mdMedia;
    });


