angular-cookie  [![Build Status](https://travis-ci.org/ivpusic/angular-cookie.png?branch=master)](https://travis-ci.org/ivpusic/angular-cookie)
==============

Lightweight Angular module for access to cookies

Installation
------------

You can install ``angular-cookie`` via bower

```
bower install angular-cookie
```

Other way to install ``angular-cookie`` is to clone this repo into your project with this command

```
git clone git@github.com:ivpusic/angular-cookie.git
```

Then you need to include ``angular-cookie.js`` script into your project

```html
<script src="/path/to/angular-cookie.min.js"></script>
```

or include `beautified` version with

```html
<script src="/path/to/angular-cookie.js"></script>
```

To rebuild `min.js` version run

```
grunt build
```

Run example
-----------

To run example execute following commands

```
git clone git@github.com:ivpusic/angular-cookie.git
cd angular-cookie
npm -g install bower
npm -g install grunt
npm install
bower install
grunt
```

After this, go at ``127.0.0.1:9001/example`` in your browser, and you will see running example of ``angular-cookie``.

Usage
-----

First you need to inject ``ipCookie`` into your angular module.

```javascript
var myApp = angular.module('myApp', ['ipCookie']);
```
And now, for example if you want to use it from your controller

```javascript
myApp.controller('cookieController', ['$scope', 'ipCookie', function($scope, ipCookie) {
  // your code here
}]);
```

General signature of main function is

```javascript
ipCookie(key, value, options);
```

#### Set

To create a cookie use

```javascript
ipCookie(key, value);
```

The `value` supports strings, numbers, booleans, arrays and objects and will be automatically serialized into the cookie.

You can also set some additional options, like number of day when a cookie expires

```javascript
ipCookie(key, value, { expires: 21 });
```

If you want to specify a cookie path use

```javascript
ipCookie(key, value, { path: '/some/path' });
```

#### Get

To get all cookies use

```javascript
ipCookie();
```

If you want to get a cookie with a specific key use

```javascript
ipCookie(key);
```

If any cookie was not found, function returns ``undefined``.

The returned value will be automatically deserialized.

#### Remove

And if you want to remove a cookie use

```javascript
ipCookie.remove(key);
```

To remove a cookie on a specific path use

```javascript
ipCookie.remove(key, { path: '/some/path/' });
```

Options
-------

#### Domain


```
domain: 'example.com'
```

The domain tells the browser to which domain the cookie should be sent. 
If you don't specify it, it becomes the domain of the page that sets the cookie.

#### Path

```
path: '/'
```

The path gives you the chance to specify a directory where the cookie is active.

#### Expires

```
expires: 21
```

Each cookie has an expiry date after which it is trashed.
If you don't specify the expiry date the cookie is trashed when you close the browser.

#### Expiration Unit

```
expirationUnit: 'minutes'
```

Allows you to set the expiration time in ``hours``, ``minutes`` or ``seconds``.
If this is not specified, any expiration time specified will default to days.

#### Secure

```
secure: true
```

The Secure attribute is meant to keep cookie communication limited to encrypted transmission, 
directing browsers to use cookies only via secure/encrypted connections.


## Defaults
To set defaults for the options you can use the ``ipCookieProvider`` as follows:

```javascript
myApp.config(['ipCookieProvider', function(ipCookieProvider) {
	ipCookieProvider.setDefaults({
		path: '/',
		expires: 21
	});
}]);
```

## Notes
- String (only digits) encoding -> [check this PR](https://github.com/ivpusic/angular-cookie/pull/29)

TODO
----

- Add tests
