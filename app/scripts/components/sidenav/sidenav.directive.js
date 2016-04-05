/**
 * Created by tianhengzhou on 4/2/16.
 */
"use strict";

angular.module('baoziApp')
  .directive('sideNav', function () {
    return {
      templateUrl: 'scripts/components/sidenav/sidenav.html',
      restrict: 'E',
      controller: 'SidenavController',
      controllerAs: 'sidenav',
      replace: true
    };
  });

