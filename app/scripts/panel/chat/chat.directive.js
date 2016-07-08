/**
 * Created by tianhengzhou on 5/8/16.
 */
"use strict";

angular.module('baoziApp')
  .directive('scrollBottom', function () {
    return {
      scope: {
        scrollBottom: "="
      },
      link: function (scope, element) {
        scope.$watchCollection('scrollBottom', function () {
          $(element).scrollTop($(element)[0].scrollHeight);
        });
      }
    };
  });