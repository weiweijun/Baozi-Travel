/**
 * Created by tianhengzhou on 6/11/16.
 */
"use strict";
angular.module('baoziApp')
  .controller('MessageCtrl', function (profile, channelName, messages) {
    var messageCtrl = this;
    messageCtrl.messages = messages;
    messageCtrl.channelName = channelName;
    messageCtrl.message = '';
    messageCtrl.sendMessage = function () {
      if(messageCtrl.message.length > 0){
        messageCtrl.messages.$add({
          uid: profile.$id,
          body: messageCtrl.message,
          timestamp: Firebase.ServerValue.TIMESTAMP
        }).then(function () {
          messageCtrl.message = '';
        });
      }
    };
  });
