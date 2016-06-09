/**
 * Created by tianhengzhou on 6/8/16.
 */
"use strict";
angular.module('baoziApp')
  .factory('Channels', function ($firebaseArray, FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl+'channels');
    var channels = $firebaseArray(ref);
    return channels;
  });
