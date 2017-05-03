(function () {
	"use strict";

	var app = angular.module("home", ["fields", "blocks"]);

	app.controller("homeController", function ($state, $rootScope, $scope, functionService, httpService) {
		$scope.search = function () {
			var val = document.getElementById("searchValue").value;
			console.log(val);
		}

		$scope.blocksActive = function () {
			return $state.$current.name === 'shell.home.blocks';
		}

		$scope.fieldsActive = function () {
			return $state.$current.name === 'shell.home.fields';
		}

		$scope.clubsActive = function () {
			return $state.$current.name === 'shell.home.clubs';
		}

		$scope.goToFields = function () {
			$state.go("shell.home.fields");
		}

		$scope.goToBlocks = function () {
			$state.go("shell.home.blocks");
		}

		$scope.goToClubs = function () {
			$state.go("shell.home.clubs");
		}
	})
})();
