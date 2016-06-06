/**
 * Created by tianhengzhou on 6/1/16.
 */
"use strict";
angular.module('baoziApp')
  .controller('ProfileCtrl',['$state', 'md5', 'auth', 'profile',
    function ($state, md5, auth, profile) {
      var profileCtrl = this;
      profileCtrl.profile = profile;
      profileCtrl.updateProfile = function () {
        console.log(profileCtrl.profile);
        profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
        profileCtrl.profile.$save();
      };
  }]);
