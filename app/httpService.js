(function() {
	"use strict";

	var app = angular.module("app");
	app.service("httpService", function($http, $state, $rootScope) {
		var url = "https://beta.hoesnelwasik.nl/api/"
		this.httpRequest = function(method, regatta, year, part, payload) {
			if (method === "GET") {
				if (regatta) {
					var fullUrl = url + "wd" + "/" + regatta + "/";
					if (year) {
						fullUrl += year + "/";
						if (part) {
							fullUrl += part + "/";
						}
					}
				}
				else {
					fullUrl = url;
				}
			}
			else {
				fullUrl = method;
				method = "GET";
			}
			return new Promise(resolve => {
				$http({
					method: method,
					url: fullUrl,
					data: JSON.stringify(payload)
				}).then(function(response) {
					resolve(response.data);
				})
			})
		}
	});
})();
