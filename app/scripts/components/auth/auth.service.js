/**
 * Created by tianhengzhou on 6/1/16.
 */
"use strict";
angular.module('baoziApp')
  .factory('Auth', function ($firebaseAuth, $firebaseObject,  FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);
    return auth;
  });
