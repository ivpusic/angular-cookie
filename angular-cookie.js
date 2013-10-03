/**
* Copyright 2013 Ivan Pusic
* Contributors:
*   Matjaz Lipus
*/
angular.module('myCookie', []).factory('Cookie', ['$document', function ($document) {
    'use strict';

    function cookieFun(key, value, options) {

        var i,
            len,
            pos,
            list,
            name,
            cookie,
            cookies,
            expires,
            hasCookies;

        // we are getting value
        if (value !== undefined) {
            // we are setting value
            value = typeof value === 'object' ? JSON.stringify(value) : String(value);

            if (options && typeof options.expires === 'number') {
                expires = new Date();
                expires.setDate(expires.getDate() + options.expires);
                options.expires = expires;
            }

            $document.context.cookie =
                encodeURIComponent(key) + '=' + encodeURIComponent(value) +
                (options && options.expires ? '; expires=' + options.expires.toUTCString() : '') +
                (options && options.path    ? '; path='    + options.path                  : '') +
                (options && options.domain  ? '; domain='  + options.domain                : '') +
                (options && options.secure  ? '; secure'                                   : '');
            return;
        }

        // we are getting value
        hasCookies = false;
        cookies    = {};
        list       = $document.context.cookie.split('; ');
        for (i = 0, len = list.length; i < len; i += 1) {
            if (list[i]) {
                cookie = list[i];
                pos = cookie.indexOf('=');
                name = cookie.substring(0, pos);
                value = decodeURIComponent(cookie.substring(pos + 1));

                if (key === undefined || key === name) {
                    try {
                        cookies[name] = JSON.parse(value);
                    } catch (e) {
                        cookies[name] = value;
                    }
                    if (key === name) {
                        return cookies[name];
                    }
                    hasCookies = true;
                }
            }
        }
        if (hasCookies && key === undefined) {
            return cookies;
        }
    }

    cookieFun.remove = function (key, options) {

        var hasCookie = cookieFun(key) !== undefined;
        if (hasCookie) {
            if (!options) {
                options = {};
            }
            options.expires = -1;
            cookieFun(key, '', options);
        }
        return hasCookie;
    };
    return cookieFun;
}]);
