var todoApp = angular.module('cookie-example', ['ngCookie']);

todoApp.controller('cookieController', ['$scope', '$document', '$cookie', function($scope, $document, $cookie) {

    $scope.saveCookie = function () {
        // key, value, options
        console.log('saving cookie...');
        $cookie('exampleCookie', $scope.cookie, { expires: 7, path: '/example' });

        console.log('new cookie value...');
        console.log($cookie('exampleCookie'));
        
        console.log('removing cookie...');
        $cookie.remove('exampleCookie', { path:'/example'} );
    };
    
    console.log('getting all cookies...');
    console.log($cookie());
}]);
