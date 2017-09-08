myApp.controller('MainController', function($scope,$http) {
    $http.get('json/services.json')
        .then(function (response) {
            $scope.services = response.data;
        })
});
