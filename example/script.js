var todoApp = angular.module('cookie-example', ['ivpusic.cookie']);

todoApp.controller('cookieController', ['$scope', '$document', 'ipCookie', function($scope, $document, ipCookie) {

    $scope.saveCookie = function () {
        // key, value, options
        console.log('saving cookie...');
        ipCookie('exampleCookie', $scope.cookie, { expires: 7, path: '/example' });
        ipCookie('exampleCookie', $scope.cookie, { expires: 7, path: '/'});
        console.log('new cookie value...');
        console.log(ipCookie('exampleCookie'));

        console.log('removing cookie...');
        ipCookie.remove('exampleCookie');
        ipCookie.remove('exampleCookie', { path: '/' });
    };

    console.log('getting all cookies...');
    console.log(ipCookie());
    console.log('getting cookie with key: exampleCookie');
    console.log(ipCookie('exampleCookie'));
}]);
