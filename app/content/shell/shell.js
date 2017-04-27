(function () {
	"use strict";

	var app = angular.module("shell", ["home"]);

	app.controller("shellController", function ($state, $rootScope, $scope, functionService, httpService, $location) {
		//setup shell
		$scope.activeYearDropdown = false;

		if (localStorage.getItem("currentRegatta")) {
			$rootScope.currentRegatta = JSON.parse(localStorage.getItem("currentRegatta"));
		}
		else if ($rootScope.regattas) {
			$rootScope.currentRegatta = $scope.findRegatta("ww", "2017");
			localStorage.setItem("currentRegatta", JSON.stringify($rootScope.currentRegatta));
		}

		$scope.getHeaderTitle = function () {
			if ($rootScope.regattas && $rootScope.currentRegatta) {
				if ($scope.activeYearDropdown) {
					var titleArrow = "\u25B4"
				} else {
					var titleArrow = "\u25BE"
				}
				return $rootScope.currentRegatta.shortname.toUpperCase() + " " + $rootScope.currentRegatta.jaar + " " + titleArrow;
			}
			return "";
		}

		$scope.findRegatta = function(shortname, year) {
			for (var i = 0; i < $rootScope.regattas.length; i++) {
				if ($rootScope.regattas[i].shortname.toLocaleLowerCase() === shortname.toLocaleLowerCase() && $rootScope.regattas[i].jaar === year) {
					return $rootScope.regattas[i];
				}
				return;
			}
		}

		$scope.chooseYear = function () {
			$scope.activeYearDropdown = !$scope.activeYearDropdown;
		}

		$scope.getYears = function () {
			if ($rootScope.regattas && $rootScope.currentRegatta) {
				var years = [];
				for (var i = 0; i < $rootScope.regattas.length; i++) {
					if ($rootScope.regattas[i].shortname == $rootScope.currentRegatta.shortname) {
						years.push($scope.regattas[i]);
					}
				}
				return years.sort(yearCompare).reverse();
			}
		}

		function yearCompare(a, b) {
			if (a.jaar < b.jaar)
				return -1;
			if (a.jaar > b.jaar)
				return 1;
			return 0;
		}

		$scope.chooseMatch = function () {
			console.log("open drawer")
		}

		$scope.goHome = function () {
			console.log("thuis");
		}

		$scope.goToResults = function () {
			console.log("uitslagen");
		}

		$scope.goToLive = function () {
			console.log("live")
		}

		$scope.goToYear = function (year) {
			$rootScope.currentRegatta = year;
			$scope.activeYearDropdown = false;
			localStorage.setItem("currentRegatta", JSON.stringify($rootScope.currentRegatta));
			functionService.getFields().then(function () {
				$scope.$applyAsync();
			})
		}
		//fetching data
		functionService.getRegattas().then(function () {
			functionService.getFields().then(function () {
				$scope.$applyAsync();
			})
		})
	})
})();
