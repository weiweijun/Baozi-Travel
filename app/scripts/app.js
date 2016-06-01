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
  .constant('FirebaseUrl', 'https://popping-heat-9212.firebaseio.com')
  .factory('Auth', function ($firebaseAuth, $firebaseObject,  FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);
    return auth;
  })
  .factory('Users', function ($firebaseArray, $firebaseObject, FirebaseUrl) {
    var usersRef = new Firebase(FirebaseUrl+'users');
    var users = $firebaseArray(usersRef);
    var Users = {
      getProfile: function (uid) {
        return $firebaseObject(usersRef.child(uid));
      },
      getDisplayName: function (uid) {
        return users.$getRecord(uid).displayName;
      },
      all: users
    };
    return Users;
  })
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
      controller: 'AuthCtrl as auth',
      resolve: {
        requireNoAuth: function ($state, Auth) {
          return Auth.$requireAuth().then(function (auth) {
            $state.go('panel');
          }, function (error) {
            return;
          });
        }
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'scripts/components/auth/register.html',
      controller: 'AuthCtrl as auth',
      resolve: {
        requireNoAuth: function ($state, Auth) {
          return Auth.$requireAuth().then(function (auth) {
            $state.go('panel');
          }, function (error) {
            return;
          });
        }
      }
    });
  });
