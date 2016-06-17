'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:FoodmapCtrl
 * @description
 * # FoodmapCtrl
 * Controller of the weather forecast module
 */
angular.module('baoziApp')
  .controller('ChatCtrl', function($scope, $state, $mdMedia, Auth, Users, 
                                   channels, profile){
      Users.setOnline(profile.$id);
      var chatCtrl = this;
      chatCtrl.direction = false;
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
      chatCtrl.toggle = function () {
        chatCtrl.direction = !chatCtrl.direction;
      };
      chatCtrl.users = Users.all;
  });


