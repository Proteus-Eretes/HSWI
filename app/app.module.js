(function() {
	"use strict";

	var app = angular.module("app", ["ui.router","shell"]);
	app.config(function($stateProvider, $urlRouterProvider) {

		// For any unmatched url, send to home
		$urlRouterProvider.otherwise("/velden");

		$stateProvider.state("shell", {
			templateUrl: "app/content/shell/shell.html",
			abstract: true
		})
		.state("shell.home", {
			abstract: true,
			templateUrl: "app/content/home/home.html",
		})
		.state("shell.home.fields", {
			url: "/velden",
			templateUrl: "app/content/home/fields/fields.html"
		})
		.state("shell.home.blocks", {
			url: "/blokken",
			templateUrl: "app/content/home/blocks/blocks.html"
		})
	});
})();
