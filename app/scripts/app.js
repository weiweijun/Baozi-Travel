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
        controller: 'WeatherCtrl as weather',
        resolve: {
          requireNoAuth: function ($state, Auth) {
            return Auth.$requireAuth().then(function (auth) {
              $state.go('profile');
            }, function (error) {
              console.log(error);
            });
          }
        }
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
        parent: 'panel',
        resolve:{
          //channels: function (Channels) {
          //  return Channels.$loaded();
          //},
          profile: function ($state, Auth, Users) {
            return Auth.$requireAuth().then(function (auth) {
              return Users.getProfile(auth.uid).$loaded().then(function (profile) {
                if (profile.displayName){
                  return profile;
                }else{
                  $state.go('blog');
                }
              });
            }, function (error) {
              $state.go('home');
            });
          }
        }


      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'scripts/panel/chat/chat.html',
        controller: 'PanelCtrl as panel',
        parent: 'panel'
      })
      .state('profile', {
        url: '/profile',
        controller: 'ProfileCtrl as profileCtrl',
        templateUrl: 'scripts/panel/profile/profile.html',
        parent: 'panel',
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
