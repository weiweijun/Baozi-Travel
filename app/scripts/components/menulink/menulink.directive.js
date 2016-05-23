"use strict";

angular.module('baoziApp')
  .service('menu', function () {
    var sections = [];
    sections.push(
      {
        name: 'Food Map',
        link: 'map',
        icon: '&#xE55B;',
        awesome_icon: 'fa fa-cutlery'
      },
      {
        name: 'Wine Shop',
        link: 'shop',
        icon: '&#xE8CB;',
        awesome_icon: 'fa fa-glass'
      },
      {
        name: 'Travel Blog',
        link: 'blog',
        icon: '&#xE87A;',
        awesome_icon: 'fa fa-suitcase'
      },
      {
        name: 'Happy Chat',
        link: 'chat',
        icon: '&#xE0B7;',
        awesome_icon: 'fa fa-comments'
      });
    return sections;
  })
  .directive('menuLink',['menu', function (menu) {
    return {
      scope:{
        section: '='
      },
      templateUrl: 'scripts/components/menulink/menulink.html',
      restrict: 'E',
      controller: 'MenulinkController',
      controllerAs: 'menulink',
      replace: true,
      link: function (scope) {
        scope.menu = menu;
      }
    };
  }])
  .directive('isActiveLink', ['$location', function ($location) {
  return {
    restrict: 'A', //use as attribute
    replace: false,
    link: function (scope, elem) {
      //after the route has changed
      scope.$on("$routeChangeSuccess", function () {
        console.log($location.path());
        var hrefs = ['/#' + $location.path(),
          '#' + $location.path(), //html5: false
          $location.path()]; //html5: true
        angular.forEach(elem.find('a'), function (a) {
          a = angular.element(a);
          var kids = a.children();
          if (-1 !== hrefs.indexOf(a.attr('href'))) {
            kids.addClass('mdl-color-text--green-400').removeClass('mdl-color-text--blue-grey-400');
          } else {
            kids.removeClass('mdl-color-text--green-400').addClass('mdl-color-text--blue-grey-400');
          }
        });
      });
    }
  };
  }]);


