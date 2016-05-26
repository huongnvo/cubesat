cubesatApp.controller("newreqController", function($scope, $http) {
    $scope.addReq = function() {
        $scope.newpart = {
            name: $scope.inputName,
            identifier: $scope.inputIdentifier,
            description: $scope.inputDescription,
            flowup: $scope.inputFlowup
        };
        $http.post('/requirements', $scope.newpart)
            .success(function(data) {
                $scope.inputName = '';
                $scope.inputIdentifier = '';
                $scope.inputDescription = '';
                $scope.inputFlowup = '';
            });
    };
});

