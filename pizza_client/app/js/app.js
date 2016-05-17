'use strict';

var app = angular.module('pizza', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/pizza/ingredients.html',
			controller: 'IngCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});