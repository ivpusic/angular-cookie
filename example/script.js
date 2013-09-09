var todoApp = angular.module('cookie-example', ['ngCookie']);

todoApp.controller('cookieController', ['$scope', '$document', '$cookie', function($scope, $document, $cookie) {
   
    function printCookie() {
        console.log($cookie('exampleCookie'));
    }

    function removeCookie() {
        $cookie.remove('exampleCookie', { path: '/example' });
    }

    $scope.saveCookie = function () {
        $cookie('exampleCookie', $scope.cookie, { expires: 7, path: '/example' });
        printCookie();
        removeCookie();
    };
}]);
