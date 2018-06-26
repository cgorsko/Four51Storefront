four51.app.controller('shortProductViewCtrl', ['$routeParams', '$scope', 'Product','ProductDisplayService', function ($routeParams, $scope, Product, ProductDisplayService) {
	Product.get($scope.p.InteropID, function(product){
		$scope.LineItem = {};
		$scope.LineItem.Product = product;
		$scope.LineItem.Product.Variants = null;
		ProductDisplayService.setNewLineItemScope($scope);
		ProductDisplayService.setProductViewScope($scope);
	});
}]);
