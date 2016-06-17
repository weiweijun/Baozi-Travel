/**
 * Created by tianheng on 6/24/16.
 */
"use strict";
angular.module('baoziApp')
  .controller('MeetupCtrl', function($scope, profile){
    var meetupCtrl = this;
    meetupCtrl.profile = profile;
    $scope.meetup = {
      name: '',
      host: profile.displayName
    }
  });
