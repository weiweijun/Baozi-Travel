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
    'angular-md5',
    'firebase',
    'ui.router'
  ])
  .constant('FirebaseUrl', 'https://popping-heat-9212.firebaseio.com/')
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
        controller: 'AuthCtrl as authCtrl',
        resolve: {
          requireNoAuth: function ($state, Auth) {
            return Auth.$requireAuth().then(function (auth) {
              $state.go('chat');
            }, function (error) {
              console.log(error);
            });
          }
        }
      })
      .state('register', {
        url: '/register',
        templateUrl: 'scripts/components/auth/register.html',
        controller: 'AuthCtrl as authCtrl',
        resolve: {
          requireNoAuth: function ($state, Auth) {
            return Auth.$requireAuth().then(function (auth) {
              $state.go('chat');
            }, function (error) {
              console.log(error);
            });
          }
        }
      })
      .state('profile', {
        url: '/profile',
        controller: 'ProfileCtrl as profile',
        templateUrl: 'scripts/panel/profile/profile.html',
        resolve: {
          auth: function ($state, Users, Auth) {
            // $requireAuth() resolve a promise successfully when a user is
            // authenticated and reject otherwise. promise.catch will catch the
            // rejection. catch is a shorthand for us if we don't want to
            // process the success handler.
            return Auth.$requireAuth().catch(function () {
              $state.go('home');
              console.log('No User');
            });
          },
          profile: function (Users, Auth) {
            return Auth.$requireAuth().then(function (auth) {
              return Users.getProfile(auth.uid).$loaded();
            });
          }
        }
      });
  });
