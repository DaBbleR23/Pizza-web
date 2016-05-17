'use strict';

app.controller('BarCtrl', function ($scope, $location) {
	$scope.routeIs = function (routeName) {
		return $location.path() === routeName;
	};
});