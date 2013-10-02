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

    function isEmpty(obj) {

        if (obj === null || obj === undefined) {
            return false;
        }

        var key;
        for(key in obj) {
            if(obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    angular.module('ngCookie', ['ng']).
    factory('$cookie', ['$document', function ($document) {
        return (function() {
            function cookieFun(key, value, options) {
                options = options || {};
                
                if (value !== undefined) {
                    // we are setting value
                    value = typeof value === 'object' ? JSON.stringify(value) : String(value);

                    if (typeof options.expires === 'number') {
                        var expiresFor = options.expires;
                        options.expires = new Date();
                        // Trying to delete a cookie; set a date far in the past
                        if(expiresFor === -1) {
                            options.expires = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
                        // A new 
                        } else {
                            options.expires.setDate(options.expires.getDate() + expiresFor);    
                        }

                    }   

                    return ($document[0].cookie = [
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
                var all = $document[0].cookie;
                var list = all.split("; ");
                for(i = 0; i < list.length; ++i) {  
                    if (list[i]) {
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
                }
                return isEmpty(cookies) ? false : cookies;
            }
            cookieFun.remove = function (key, options) {
                options = options || {};
                
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
