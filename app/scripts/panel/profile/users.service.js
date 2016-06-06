/**
 * Created by tianhengzhou on 6/1/16.
 */
"use strict";
angular.module('baoziApp')
  .factory('Users', function ($firebaseArray, $firebaseObject, FirebaseUrl) {
    var usersRef = new Firebase(FirebaseUrl+'users');
    var users = $firebaseArray(usersRef);
    return {
      getProfile: function (uid) {
        return $firebaseObject(usersRef.child(uid));
      },
      getDisplayName: function (uid) {
        return users.$getRecord(uid).displayName;
      },
      getGravatar: function (uid) {
        return 'http://www.gravatar.com/avatar/'+ users.$getRecord(uid).emailHash;
      },
      all: users
    };
  });
