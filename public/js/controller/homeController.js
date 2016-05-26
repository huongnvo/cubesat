cubesatApp.controller("homeController", function($scope, $http) {
    var company = "uwcubesat";
    var key = "cork73water";
    var str = key + ":xxx";

    var base64 = window.btoa(str);
    $scope.getData = function() {
        $scope.results = 'hello world';
        var req = {
            url: "http://uwcubesat.teamwork.com/time_entries.json?fromdate=20160513",
            method: "GET",
            headers: {
                "Authorization": "BASIC " + base64,
                "Content-Type": "application/json"
            }
        };
        $http(req).then(function(res){
            $scope.results = res.data;
            $scope.results = $scope.results['time-entries'];
        });
    };
    $scope.getData();
    
    $scope.predicate = 'Name';
    $scope.reverse = false;
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
});