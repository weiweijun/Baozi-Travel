/**
 * Created by tianhengzhou on 5/9/16.
 */
"use strict";

angular.module('baoziApp')
  .controller('MenulinkController', ['$scope', '$mdMedia', '$location',
    function ($scope, $mdMedia, $location){
      $scope.$mdMedia = $mdMedia;
      $scope.isActive = function (viewlocation) {
        return $location.path() === viewlocation;
      };

    }]);
