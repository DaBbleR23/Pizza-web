'use strict';

app.directive('pizzaList', function () {
	return {
		restrict: "E",
		templateUrl: "js/pizza/IngListDir.html",
		scope: {
			"list": "=",
			"order": "="
		}
	}
});