(function () {
	"use strict";

	var app = angular.module("fields", []);

	app.controller("fieldsController", function ($state, $rootScope, $scope, functionService) {
		$scope.setActiveButton = function (buttonNumber) {
			$scope.activeFieldFilter = buttonNumber;
			localStorage.setItem("activeFieldFilter", buttonNumber);
		}

		$scope.goToField = function(field) {
			console.log(field.fieldnameshort);
		}

		$scope.getFields = function (people, filter, antifilter1, antifilter2, antifilter3) {
			if (people == 0) {
				var persons = 1;
			} else if (people == 1) {
				var persons = 2;
			} else if (people == 2) {
				var persons = 4;
			} else {
				var persons = 8;
			}
			var returnFields = [];
			//only sort fields if fields are actually loaded
			if ($rootScope.currentRegatta && $rootScope.currentRegatta.fields) {
				for (var i = 0; i < $rootScope.currentRegatta.fields.length; i++) {
					var field = $rootScope.currentRegatta.fields[i].fieldnameshort;
					if (field[field.length - 2] == persons) {
						if (field.toLowerCase().startsWith(filter.toLowerCase()) &&
						!field.toLowerCase().startsWith(antifilter1.toLowerCase()) &&
						!field.toLowerCase().startsWith(antifilter2.toLowerCase()) &&
						!field.toLowerCase().startsWith(antifilter3.toLowerCase())) {
							returnFields[returnFields.length] = $rootScope.currentRegatta.fields[i];
						}
					}
				}
			}
			return returnFields;
		}

		if (localStorage.getItem("activeFieldFilter")) {
			$scope.activeFieldFilter = localStorage.getItem("activeFieldFilter");
		} else {
			$scope.setActiveButton(0);
		}
	})
})();
