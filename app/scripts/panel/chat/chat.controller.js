'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:FoodmapCtrl
 * @description
 * # FoodmapCtrl
 * Controller of the weather forecast module
 */
angular.module('baoziApp')
  .controller('ChatCtrl', ['$scope','$state', 'Auth', 'Users', 'channels',
    'profile', function($scope, $state, Auth, Users, channels, profile){
      var chatCtrl = this;
      chatCtrl.profile = profile;
      chatCtrl.channels = channels;
      chatCtrl.getDisplayName = Users.getDisplayName;
      chatCtrl.getGravatar = Users.getGravatar;
      chatCtrl.newChannel = {
        name: ''
      };
      chatCtrl.createChannel = function () {
        chatCtrl.channels.$add(chatCtrl.newChannel).then(function (ref) {
          $state.go('panel.chat.messages', {channelId: ref.key()});
          chatCtrl.newChannel = {
            name: ''
          };
        });
      };
      chatCtrl.users = Users.all;
  }]);


