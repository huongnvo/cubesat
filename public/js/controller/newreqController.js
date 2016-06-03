cubesatApp.controller("newreqController", function($scope, $http) {
    $scope.addReq = function() {
        $scope.newpart = {
            name: $scope.inputName,
            description: $scope.inputDescription,
            product: $scope.inputProduct,
            subsystem: $scope.inputSubsystem,
            identifier: $scope.length,
            type: $scope.inputType,
            rationalization: $scope.inputRationalization,
            verification: $scope.inputVerification
        };
        $http.post('/requirements', $scope.newpart)
            .success(function(data) {
                $scope.inputRationalization = '';
                $scope.inputVerification = '';
                $scope.inputName = '';
                $scope.inputDescription = '';
                $scope.length++;
                window.scrollTo(0, 0);
            });
    };

    $scope.predicate = 'identifier';
    $scope.reverse = false;
    
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    $scope.getData = function() {
        $http.get('/requirements').then(function(result) { 
                $scope.requirements = result.data;
                $scope.length = $scope.requirements.length;
            }); 

        $http.get('/products').then(function(result) { 
                $scope.products = result.data;
            });         
    }
    $scope.getData();

    $scope.saveSubsystem = function(subsystem) {
        $scope.inputSubsystem = subsystem;
    };

    $scope.saveReqType = function(type) {
        $scope.inputType = type;
    };

    $scope.saveProduct = function(product) {
        $scope.inputProduct = product;
    }

    $(document).ready(function() {
        $('.nav-tabs > li > a').click(function(event){
            event.preventDefault();//stop browser to take action for clicked anchor
     
            //get displaying tab content jQuery selector
            var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');                  
     
            //find actived navigation and remove 'active' css
            var actived_nav = $('.nav-tabs > li.active');
            actived_nav.removeClass('active');
     
            //add 'active' css into clicked navigation
            $(this).parents('li').addClass('active');
     
            //hide displaying tab content
            $(active_tab_selector).removeClass('active');
            $(active_tab_selector).addClass('hide');
     
            //show target tab content
            var target_tab_selector = $(this).attr('href');
            $(target_tab_selector).removeClass('hide');
            $(target_tab_selector).addClass('active');
        });
    });

});

