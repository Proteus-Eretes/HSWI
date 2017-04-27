(function () {
	"use strict";

	var app = angular.module("home", ["fields", "blocks"]);

	app.controller("homeController", function ($state, $rootScope, $scope, functionService, httpService) {
		$scope.search = function () {
			var val = document.getElementById("searchValue").value;
			console.log(val);
		}
	})
})();
