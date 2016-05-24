/**
 * Created by tianhengzhou on 5/23/16.
 */
angular.module('baoziApp')
  .controller('PanelCtrl', ['$scope', '$mdMedia', function ($scope, $mdMedia){
    $scope.$mdMedia = $mdMedia;
  }]);
