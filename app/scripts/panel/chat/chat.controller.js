'use strict';

/**
 * @ngdoc function
 * @name baoziApp.controller:FoodmapCtrl
 * @description
 * # FoodmapCtrl
 * Controller of the weather forecast module
 */
angular.module('baoziApp')
  .controller('ChatCtrl', ['$scope', 'Auth', 'Users', 'profile', 'channels',
    function($scope, Auth, Users, profile, channels){
      var chatCtrl = this;
      chatCtrl.profile = profile;
      chatCtrl.channels = channels;
      chatCtrl.getDisplayName = Users.getDisplayName;
      chatCtrl.getGravatar = Users.getGravatar;

  }]);


