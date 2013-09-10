angular-cookie
==============

Lightweight Angular module for access to cookies

Usage
-----

General signature of main function is

```
$cookie(key, value, options);
```

To create cookie use

```
$cookie(key, value);
```

You can also set some additional options, like number of day when cookie will expire

```
$cookie(key, value, { expire: 21 });
```

If you want to specify directory where is cookie active use

```
$cookie(key, value, { path: '/some/path' });
```

If you want to get cookie value use

```
$cookie(key);
```

And if you want to remove cookie use

```
$cookie.remove(key);
```

If cookie which you want to remove is on some specific path use

```
$cookie.remove(key, { path: '/some/path' });
```

Options
-------

### Domain


```
domain: 'example.com'
```

The domain tells the browser to which domain the cookie should be sent. 
If you don't specify it, it becomes the domain of the page that sets the cookie.

### Path

```
path: '/'
```

The path gives you the chance to specify a directory where the cookie is active.

### Expires

```
expires: 21
```

Each cookie has an expiry date after which it is trashed.
If you don't specify the expiry date the cookie is trashed when you close the browser.

### Secure

```
secure: true
```

The Secure attribute is meant to keep cookie communication limited to encrypted transmission, 
directing browsers to use cookies only via secure/encrypted connections. 
