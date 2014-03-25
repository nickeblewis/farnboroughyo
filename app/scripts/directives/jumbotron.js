'use strict';

angular.module('farnboroughyoApp')
  .directive('jumbotron', function () {
    return {
			template: '<div class="jumbotron"><h1>{{jtHeading}}</h1><p class="lead"><img src="images/yeoman.png" alt="Im Yeoman"><br>{{jtIntro}}</p><p><a class="btn btn-lg btn-success" ng-href="#">{{jtButton}}</a></p></div>',
      restrict: 'EA',
			replace: true,
			scope: {
				jtHeading: '@',
				jtIntro: '@',
				jtButton: '@'
			}
    };
  });
