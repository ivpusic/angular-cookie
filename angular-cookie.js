/*
* Copyright 2013 Ivan Pusic
*/
(function(angular, undefined) {
    'use strict';

    function extend(a, b){
        var key;
        for(key in b) {
            if(b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    angular.module('ngCookie', ['ng']).
    factory('$cookie', ['$document', function ($document) {
        return (function() {
            function cookieFun(key, value, options) {

                if (value !== undefined) {
                    // we are setting value
                    value = typeof value === 'object' ? JSON.stringify(value) : String(value);

                    if (typeof options.expires === 'number') {
                        var expiresFor = options.expires;
                        options.expires = new Date();
                        options.expires.setDate(options.expires.getDate() + expiresFor);
                    }   

                    return ($document.context.cookie = [
                        encodeURIComponent(key),
                        '=',
                        encodeURIComponent(value),
                        options.expires ? '; expires=' + options.expires.toUTCString() : '',
                        options.path    ? '; path=' + options.path : '',
                        options.domain  ? '; domain=' + options.domain : '',
                        options.secure  ? '; secure' : ''
                        ].join('')); 
                }

                // we are getting value
                var cookies = {}, i, cookie, pos, name;
                var all = $document.context.cookie;
                var list = all.split("; ");
                for(i = 0; i < list.length; ++i) {  
                    cookie = list[i];
                    pos = cookie.indexOf("=");        
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
                    }
                }
                return cookies;
            }
            cookieFun.remove = function (key, options) {

                if (cookieFun(key) !== undefined) {
                    cookieFun(key, '', extend(options, { expires: -1 }));
                    return true;
                }
                return false;
            };
            return cookieFun;
        }());
    }]);
}(window.angular));
