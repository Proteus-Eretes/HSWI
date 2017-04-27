(function () {
	"use strict";

	var app = angular.module("app");
	app.service("functionService", function ($http, $state, $rootScope, httpService, idbService, $q) {
		this.getRegattas = function () {
			return new Promise(resolve => {
				// first see if the regattas are already known, otherwise try the database
				if ($rootScope.regattas) {
					if (!$rootScope.currentRegatta) {
						$rootScope.currentRegatta = $rootScope.regattas[0];
					}
					resolve();
					return;
				}

				idbService.startDB("regatta", "regattaname", "jaar").then(function (response) {
					idbService.getItems(response, "regatta").then(function (response) {
						if (response.length > 0) {
							$rootScope.regattas = response;
							if (!$rootScope.currentRegatta) {
								$rootScope.currentRegatta = $rootScope.regattas[0];
							}
							resolve();
							return;
						}

						// if not in the database, get the data, and put it in the database
						httpService.httpRequest("GET").then(function (response) {
							$rootScope.regattas = response.regattas;
							if (!$rootScope.currentRegatta) {
								$rootScope.currentRegatta = response.regattas[0];
							}
							idbService.startDB("regatta", "regattaname", "jaar").then(function (response) {
								var promises = [];
								for (var i = 0; i < $rootScope.regattas.length; i++) {
									promises.push(idbService.addToDB(response, "regatta", $rootScope.regattas[i]))
								}
								return $q.all(promises);
							})
						})
					})
				})

			})
		}

		this.getFields = function() {
			return new Promise(resolve => {
				if (!$rootScope.currentRegatta) {
					resolve();
					return;
				}
				//insert field check
				var reg = $rootScope.currentRegatta;
				httpService.httpRequest("GET", reg.shortname, reg.jaar, "velden").then(function (response) {
					$rootScope.currentRegatta.fields = response.fields;
					resolve();
					return;
				})
			})
		}
	});
})();
