cubesatApp.controller("reqController", function($scope, $http) {
    $scope.updateProduct = function() {
        $http.get($scope.productsPath).then(function(result) { 
            $scope.products = result.data;
            var partextracted = {};
            partextracted = $scope.products[0];
            $scope.title = partextracted['name'] == 'root' ? 'All' : partextracted['name'];
            $scope.parentPath = '/products/' + partextracted['parent'];

            $http.get($scope.requirementsPath).then(function(result) { 
                $scope.requirements = result.data;
                $scope.length = $scope.requirements.length;
                $http.get('/products').then(function(result) {
                    $scope.parts = result.data;
                    $http.get($scope.parentPath).then(function(result) {
                        $scope.parentProd = result.data[0];
                    })
                });
            }); 
        });
    };

    $scope.predicate = 'identifier';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.id = window.location.search.slice(1);
    $scope.productsPath = '/products/' + $scope.id;             // grab product associated with window id
    $scope.requirementsPath = '/requirements/' + $scope.id;     // grab all requirements with the product id associated
    $scope.updateProduct();
    
    $scope.deletePart = function(req) {
        $http.delete('/requirements/' + req._id)
            .success(function(data) {
                $http.get($scope.requirementsPath).then(function(result) { 
                    $scope.requirements = result.data; 
                    $scope.length = $scope.requirements.length;
                    window.scrollTo(0, 0);
                });
        });
    };

    $scope.goToReq = function(req) {
        var path = '/id?' + req._id;
        window.location = path;
    };

    $scope.goToProd = function(req) {
        var path = '/req?' + req._id;
        window.location = path;
    };
    
});


