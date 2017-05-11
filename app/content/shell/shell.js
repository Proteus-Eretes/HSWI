(function () {
	"use strict";

	var app = angular.module("shell", ["home"]);

	app.controller("shellController", function ($state, $rootScope, $scope, functionService, httpService, $location) {
		//setup shell
		$scope.activeYearDropdown = false;
		$scope.activeReferrals = false;

		if (localStorage.getItem("currentRegatta")) {
			$rootScope.currentRegatta = JSON.parse(localStorage.getItem("currentRegatta"));
		}
		else if ($rootScope.regattas) {
			$rootScope.currentRegatta = $scope.findRegatta("ww", "2017");
			localStorage.setItem("currentRegatta", JSON.stringify($rootScope.currentRegatta));
		}

		if (localStorage.getItem("activeReferral")) {
			$rootScope.activeReferral = JSON.parse(localStorage.getItem("activeReferral"));
		}
		else {
			$rootScope.activeReferral = 0;
			localStorage.setItem("activeReferral", JSON.stringify($rootScope.activeReferral));
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

		$scope.toggleReferrals = function() {
			$scope.activeReferrals = !$scope.activeReferrals;
		}

		$scope.getReferralTitle = function() {
			if ($rootScope.regattas && $rootScope.currentRegatta) {
				var referralName = "Uitslagen";

				if ($rootScope.activeReferral === 1) {
					referralName = "Loting";
				}
				else if ($rootScope.activeReferral === 2) {
					referralName = "Inschrijvingen"
				}

				return referralName;
			}
			return "";
		}

		$scope.getReferralArrow = function() {
			if ($scope.activeReferrals) {
				return "\u25B4";
			} else {
				return "\u25BE";
			}
		}

		$scope.goToReferral =function() {
			var referralName = "Uitslagen";

			if ($rootScope.activeReferral === 1) {
				referralName = "Loting";
			}
			else if ($rootScope.activeReferral === 2) {
				referralName = "Inschrijvingen"
			}
			if ($scope.activeReferrals) {
				$scope.toggleReferrals();
			}
			console.log(referralName);
		}

		$scope.goHome = function () {
			$state.go("shell.home.fields");
		}

		$scope.setReferral = function(number) {
			$rootScope.activeReferral = number;
			localStorage.setItem("activeReferral", JSON.stringify($rootScope.activeReferral));

			if (!$state.$current.name.startsWith("shell.home")) {
				$state.go("shell.home.velden");
			}
			$scope.toggleReferrals();
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
