/**
 * Created by tianhengzhou on 5/19/16.
 */
"use strict";

angular.module('baoziApp')
  .controller('AuthCtrl', ['$state', 'Auth', '$firebaseAuth',
    '$firebaseObject', 'FirebaseUrl', 'md5',
    function ($state, Auth, $firebaseAuth, $firebaseObject, FirebaseUrl, md5) {
      var authCtrl = this;
      var ref = new Firebase(FirebaseUrl);
      authCtrl.user = {
        email: '',
        password: '',
        displayName: ''
      };
      authCtrl.login = function () {
        Auth.$authWithPassword(authCtrl.user).then(function (auth) {
          $state.go('chat');

        }, function (err) {
          authCtrl.error = err;
        });
      };
      authCtrl.register = function () {
        Auth.$createUser(authCtrl.user).then(function (user) {
          ref.child('users').child(user.uid).set({
            displayName: authCtrl.user.email,
            emailHash: md5.createHash(authCtrl.user.email)
          });
         authCtrl.login();
        }).catch(function (error) {
          authCtrl.error = error;
        })
      };
  }]);
