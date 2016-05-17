'use strict';

app.service('Order', function ($rootScope, $http) {
	var self = {};

	self.total = 0; // total price
	self.recipe = [];
	self.hasdough = false;

	self.add = function (ingredient) {
		var newIngredient = true;
		var process = false;
		if(self.hasdough == true && ingredient.fields.type=='dough')
		{
			//Show warning message
		}
		else
		{
			if(ingredient.fields.type=='dough')
			{
				self.hasdough = true;
			}
			for (var i = 0; i < self.recipe.length; i++) {
				if (self.recipe[i].ingredient.pk == ingredient.pk) {
					if(ingredient.fields.multiplicity >= self.recipe[i].count + ingredient.fields.quantity)
					{
						self.recipe[i].count += ingredient.fields.quantity;
						process = true;
					}
					newIngredient = false;
				}
			}
			if (newIngredient && ingredient.fields.multiplicity >= ingredient.fields.quantity) {
				self.recipe.push({
					"count": ingredient.fields.quantity,
					"ingredient": ingredient
				});
				process = true;
			}

			if(process==true)
			{
				self.total += ingredient.fields.price * ingredient.fields.quantity;
			}
		}	
	};

	self.remove = function (index) {
		if(self.recipe[index].ingredient.fields.type=="dough")
		{
			self.hasdough = false;
		}
		self.total -= self.recipe[index].count * self.recipe[index].ingredient.fields.price;
		self.recipe.splice(index, 1);
	};

	self.clear = function () {
		self.total = 0;
		self.recipe = [];
		self.hasdough = false;
	};

	storeLocal('recipe', 'fmRecipe', Array);
	storeLocal('total', 'fmTotal', Number);
	storeLocal('hasdough', 'fmHasdough', Boolean);

 	// angular storege module - https://github.com/grevory/angular-local-storage
	function storeLocal(localName, storageName, Type) {
		var json = localStorage[storageName];

		self[localName] = json ? JSON.parse(json) : new Type;

		$rootScope.$watch(
			function () {
				return self[localName];
			},
			function (value) {
				localStorage[storageName] = JSON.stringify(value);
			},
			true
		);
	}

	return self;
});