myApp.controller('MainController', function($scope,$http) {

});

myApp.controller('ServicesController', function($scope,$http) {
    $http.get('json/services.json')
        .then(function (response) {
            $scope.services = response.data;
        })
});


myApp.controller('ContactsController', function($scope,$http) {
    $http.get('json/contacts.json')
        .then(function (response) {
            $scope.contacts = response.data;
        })
});