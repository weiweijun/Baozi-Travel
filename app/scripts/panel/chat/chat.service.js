/**
 * Created by tianhengzhou on 6/8/16.
 */
"use strict";
angular.module('baoziApp')
  .factory('Channels', function ($firebaseArray, FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl+'channels');
    var channels = $firebaseArray(ref);
    return channels;
  })
  .factory('Messages', function ($firebaseArray, FirebaseUrl) {
    var channelMessagesRef = new Firebase(FirebaseUrl + 'channelMessages');
    var userMessagesRef = new Firebase(FirebaseUrl + 'userMessages');
    return {
      forChannel: function (channelId) {
        return $firebaseArray(channelMessagesRef.child(channelId));
      },
      forUsers: function (uid1, uid2) {
        var path = uid1 < uid2 ? uid1 + '/' + uid2 : uid2 + '/' + uid1;
        return $firebaseArray(userMessagesRef.child(path));
      }
    };
  });

