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
    'ngMaterial',
    'ngMessages',
    'firebase',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'scripts/weather/weather.html',
        controller: 'WeatherCtrl as weather'
      })
      .state('panel', {
        abstract: true,
        templateUrl: 'scripts/panel/index.html',
        controller: 'PanelCtrl as panel'
      })
      .state('chat', {
        url: '/chat',
        templateUrl: 'scripts/panel/chat/chat.html',
        controller: 'PanelCtrl as panel',
        parent: 'panel'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'scripts/panel/chat/chat.html',
      controller: 'PanelCtrl as panel',
      parent: 'panel'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'scripts/components/auth/login.html',
      controller: 'AuthCtrl as auth'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'scripts/components/auth/register.html',
      controller: 'AuthCtrl as auth'
    });

  });
