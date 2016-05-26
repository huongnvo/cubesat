cubesatApp.controller("reqController", function($scope, $http) {
    var identifier = window.location.search.slice(1);
    var requirementsPath = '/requirements/' + identifier;

    $scope.predicate = 'identifier';
    $scope.reverse = false;
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

	$scope.title = identifier ? identifier.replace(/[0-9]/g, '').toUpperCase() : "All";   
    $scope.requirementsPath = requirementsPath;
    $scope.updateData = function() {
        $http.get(requirementsPath).then(function(result) { 
            $scope.requirements = result.data;
        }); 
    };
    $scope.updateData();
});


