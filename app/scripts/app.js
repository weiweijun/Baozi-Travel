'use strict';

/**
 * @ngdoc overview
 * @name baoziApp
 * @description
 * # baoziApp
 *
 * Main module of the application.
 */
angular
  .module('baoziApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMaterial',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/weather/weather.html',
        controller: 'WeatherCtrl',
        controllerAs: 'weather'
      })
      .when('/foodmap', {
        templateUrl: 'scripts/weather/foodmap.html',
        controller: 'FoodmapCtrl',
        controllerAs: 'foodmap'
      });
  });
