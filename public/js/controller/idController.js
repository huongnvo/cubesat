cubesatApp.controller("idController", function($scope, $http) {
    $scope.id = window.location.search.slice(1);
    $scope.requirementsPath = '/requirement/' + $scope.id;

    $scope.predicate = 'identifier';
    $scope.reverse = false;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.goBack = function(req) {
        var path = '/req?' + req.product;
        window.location = path;
    };

    $scope.updateData = function() {
        $http.get($scope.requirementsPath).then(function(result) { 
            $scope.requirement = result.data[0];
        }); 
    };
    $scope.updateData();
});


