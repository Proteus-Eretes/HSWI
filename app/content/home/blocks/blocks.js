(function () {
	"use strict";

	var app = angular.module("blocks", []);

	app.controller("blocksController", function ($state, $rootScope, $scope, functionService) {

		$scope.setActiveButton = function(index) {
			console.log(index);
			console.log($rootScope.currentRegatta.fields[0]);
		}
	})
})();
