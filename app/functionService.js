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
		function blockCompare(a, b) {
			if (parseInt(a.blockNumber) < parseInt(b.blockNumber))
				return -1;
			if (parseInt(a.blockNumber) > parseInt(b.blockNumber))
				return 1;
			return 0;
		}

		function fieldStartOrderCompare(a, b) {
			if (parseInt(a.startorder) < parseInt(b.startorder))
				return -1;
			if (parseInt(a.startorder) > parseInt(b.startorder))
				return 1;
			return 0;
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
					var fields = $rootScope.currentRegatta.fields;
					var blocks = [];
					for (var i = 0; i < fields.length; i++) {
						var field = fields[i]
						var blockExists = false;
						for (var j = 0; j < blocks.length; j++) {
							if (blocks[j].blockNumber === field.blocknumber) {
								blockExists = true;
								break;
							}
						}
						if (!blockExists) {
							blocks[blocks.length] = {
								blockNumber: field.blocknumber,
								starttime: field.starttime,
								daydate: field.daydate,
								fields: [field],
								retract: false
							}
						} else {
							blocks[j].fields[blocks[j].fields.length] = field;
						}
					}
					blocks.sort(blockCompare);

					for (var i = 0; i < blocks.length; i++) {
						blocks[i].fields.sort(fieldStartOrderCompare);
					}

					$rootScope.blocks = blocks;

					resolve();
					return;
				})
			})
		}
	});
})();
