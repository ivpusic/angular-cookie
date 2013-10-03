angular-cookie  [![Build Status](https://travis-ci.org/ivpusic/angular-cookie.png?branch=master)](https://travis-ci.org/ivpusic/angular-cookie)
==============

Lightweight Angular module for access to cookies

Installation
------------

You can install ``angular-cookie`` via bower

```
bower install angular-cookie
```

Other way to install ``angular-cookie`` is to clone this repo into you project with this command

```
git clone git@github.com:ivpusic/angular-cookie.git
```

Then you need to include ``angular-cookie.js`` script into you project

```
<script src="/path/to/angular-cookie.min.js"></script>
```

or include `beautified` version with

```
<script src="/path/to/angular-cookie.js"></script>
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

After this, go at ``127.0.0.1:9001/example`` on you browser, and you will see running example of ``angular-cookie``.

Usage
-----

First you need to inject ``myCookie`` into your angular module.

```
var myApp = angular.module('myApp', ['myCookie']);
```
And now, for example if you want to use it from your controller

```
myApp.controller('cookieController', ['$scope', 'Cookie', function($scope, Cookie) {
  // your code here
}]);
```

General signature of main function is

```
Cookie(key, value, options);
```

#### Set

To create cookie use

```
Cookie(key, value);
```

You can also set some additional options, like number of day when cookie will expire

```
Cookie(key, value, { expire: 21 });
```

If you want to specify directory where is cookie active use

```
Cookie(key, value, { path: '/some/path' });
```

#### Get

To get all cookies use

```
Cookie();
```

If you want to get cookie with some key use

```
Cookie(key);
```

If any cookie was not found, function returns ``undefined``.

#### Remove

And if you want to remove cookie use

```
Cookie.remove(key);
```

If cookie which you want to remove is on some specific path use

```
Cookie.remove(key, { path: '/some/path/' });
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

#### Secure

```
secure: true
```

The Secure attribute is meant to keep cookie communication limited to encrypted transmission,
directing browsers to use cookies only via secure/encrypted connections.
