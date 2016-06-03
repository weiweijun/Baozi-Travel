/**
 * Created by tianhengzhou on 5/19/16.
 */
"use strict";

angular.module('baoziApp')
  .directive('loginCard', function () {
    return {
      templateUrl: 'scripts/components/auth/login.html',
      restrict: 'E',
      controller: 'ProfileCtrl',
      controllerAs: 'profile',
      replace: true
    };
  });
