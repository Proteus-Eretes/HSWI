(function() {
	"use strict";

	var app = angular.module("app", ["ui.router","shell", "home"]);
	app.config(function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, send to home
		$urlRouterProvider.otherwise("/");

		$stateProvider.state("shell", {
			templateUrl: "app/content/shell/shell.html",
			abstract: true
		})
		.state("shell.home", {
			url: "/",
			templateUrl: "app/content/home/home.html",
		})
	});
})();
