/**
 * Created by tianhengzhou on 5/19/16.
 */
angular.module('baoziApp')
  .controller('AuthCtrl', ['$state', 'Auth',function ($state, Auth) {
    var authCtrl = this;
    authCtrl.user = {
      email: '',
      password: ''
    };
    authCtrl.login = function () {
      Auth.$authWithPassword(authCtrl.user).then(function (auth) {
        $state.go('chat');
      }, function (err) {
        authCtrl.error = err;
      })
    };
    authCtrl.register = function () {
      Auth.$createUser(authCtrl.user).then(function (user) {
        authCtrl.login();
      }, function (err) {
        authCtrl.error = err;
      })
    };

  }])
  .factory('Auth', function ($firebaseAuth, FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);
    return auth;
  });
