// Zepto.cookie plugin
// 
// Copyright (c) 2010, 2012 
// @author Klaus Hartl (stilbuero.de)
// @author Daniel Lacy (daniellacy.com)
// 
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
;(function($){
    $.extend($, {
        cookie : function (key, value, options) {
            //var days, time, result, decode
            var milliseconds, time, result, decode

            // A key and value were given. Set cookie.
            if (arguments.length > 1 && String(value) !== "[object Object]") {
                // Enforce object
                options = $.extend({}, options)

                if (value === null || value === undefined) options.expires = -1

                if (typeof options.expires === 'number') {
                    milliseconds = options.expires
                    time = options.expires = new Date()

                    time.setTime(time.getTime() + milliseconds)
                }

                value = String(value)

                return (document.cookie = [
                    encodeURIComponent(key), '=',
                    options.raw ? value : encodeURIComponent(value),
                    options.expires ? '; expires=' + options.expires.toUTCString() : '',
                    options.path ? '; path=' + options.path : '',
                    options.domain ? '; domain=' + options.domain : '',
                    options.secure ? '; secure' : ''
                ].join(''))
            }

            // Key and possibly options given, get cookie
            options = value || {}

            decode = options.raw ? function (s) { return s } : decodeURIComponent

            return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null
        }

    })
})(Zepto)
