var todoApp = angular.module('cookie-example', ['ipCookie']);

todoApp.controller('cookieController', ['$scope', '$document', 'ipCookie', function($scope, $document, ipCookie) {
    $scope.expires = 7;
    $scope.expirationUnit = 'days';

    var setMessage = function (message, messageStyle) {
      $scope.message = message ? message : null;
      $scope.messageStyle = messageStyle ? messageStyle : 'success';
    };

    $scope.saveCookie = function () {
        setMessage();
        $scope.messageStyle = 'success';
        // key, value, options
        console.log('saving cookie...');
        ipCookie('exampleCookie', $scope.cookie, { expires: $scope.expires, expirationUnit: $scope.expirationUnit });
        ipCookie('exampleCookie', $scope.cookie, { expires: $scope.expires, expirationUnit: $scope.expirationUnit, path: '/'});
        console.log('new cookie value...');
        console.log(ipCookie('exampleCookie'));
        setMessage("Cookie created. Use your browser cookie display to verify content or expiry.");
    };

    $scope.deleteCookie = function () {
        setMessage();
        console.log('removing cookie...');
        ipCookie.remove('exampleCookie');
        ipCookie.remove('exampleCookie', { path: '/' });
        if (ipCookie() === undefined) {
          setMessage('Successfully deleted cookie.');
        } else {
          setMessage('Unable to delete cookie.', 'danger');
        }
    };

    console.log('getting all cookies...');
    console.log(ipCookie());
    console.log('getting cookie with key: exampleCookie');
    console.log(ipCookie('exampleCookie'));
}]);
