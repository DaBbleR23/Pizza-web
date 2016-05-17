'use strict';

app.controller('IngCtrl', function ($scope, Order, $http) {

	//Please change here the address for the backend!!
	var baseurl = "http://127.0.0.1:8000/api/ingredients/";

	$http.get(baseurl)
	.then(function(response) {
	  	$scope.pizzaList = response.data;

		$scope.pizzaList.forEach(function(item){ 
			$http.get(baseurl+item.fields.name)
			.then(function(response) {
		  	item.fields.price = response.data[0].fields.price;
		  	});
		});
	});
	$scope.order = Order;
});