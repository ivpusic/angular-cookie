var todoApp = angular.module('cookie-example', ['ngCookie']);

todoApp.controller('cookieController', ['$scope', '$document', '$cookie', function($scope, $document, $cookie) {

    $scope.saveCookie = function () {
        // key, value, options
        console.log('saving cookie...');
        $cookie('exampleCookie', $scope.cookie, { expires: 7, path: '/example' });
        $cookie('exampleCookie', $scope.cookie, { expires: 7, path: '/'});
        console.log('new cookie value...');
        console.log($cookie('exampleCookie'));

        console.log('removing cookie...');
        $cookie.remove('exampleCookie');
        $cookie.remove('exampleCookie', { path: '/' });
    };

    console.log('getting all cookies...');
    console.log($cookie());
    console.log('getting cookie with key: exampleCookie');
    console.log($cookie('exampleCookie'));
}]);
