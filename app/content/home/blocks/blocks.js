(function () {
	"use strict";

	var app = angular.module("blocks", []);

	app.controller("blocksController", function ($state, $rootScope, $scope, functionService) {

		$scope.setActiveButton = function (index) {
			console.log(index);
			console.log($rootScope.currentRegatta.fields[31]);
		}

		$scope.goToField = function (field) {
			console.log(field);
		}

		$scope.printBlock = function (block) {
			console.log(block);
		}

		$scope.getApproxStartTime = function (field, index) {
			var date = new Date(field.daydate);
			var startHours = parseInt(field.starttime.substring(0,2));
			var startMinutes = parseInt(field.starttime.substring(2,4));

			date.setHours(startHours);
			date.setMinutes(startMinutes + 5 * index);

			var n = date.getMinutes();
			var mins = n > 9 ? "" + n : "0" + n;
			return date.getHours() + ":" + mins;
		}

		function getDay(s) {
			if (s.startsWith("Mo")) {
				return "Maandag";
			}
			if (s.startsWith("Tue")) {
				return "Dinsdag";
			}
			if (s.startsWith("Wed")) {
				return "Woensdag";
			}
			if (s.startsWith("Thu")) {
				return "Donderdag";
			}
			if (s.startsWith("Fr")) {
				return "Vrijdag";
			}
			if (s.startsWith("Sat")) {
				return "Zaterdag";
			}
			if (s.startsWith("Sun")) {
				return "Zondag";
			}
		}

		$scope.getTimeTitle = function(block) {
			var date = new Date(block.daydate);
			var day = getDay(date.toDateString());
			var startHours = parseInt(block.starttime.substring(0,2));
			var n = parseInt(block.starttime.substring(2,4));
			var mins = n > 9 ? "" + n : "0" + n;

			return day.substring(0, 2) + " " + startHours + ":" + mins;
		}

		$scope.toggleBlock = function(block) {
			block.retract = !block.retract;
		}

		$scope.getRetractIndicator = function(block) {
			if (!block.retract) {
				return "˅"
			}
			else {
				return "˂"
			}
		}
	})


})();
