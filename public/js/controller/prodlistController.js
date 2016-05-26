cubesatApp.controller("prodlistController", function($scope, $http) {
    var productsPath = '/products';
    $scope.productsPath = productsPath;
       
    $scope.predicate = 'identifier';
    $scope.reverse = false;
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.updateData = function() {
        $http.get(productsPath).then(function(result) { 
            $scope.products = result.data;
        }); 
    };
    $scope.updateData();
});


