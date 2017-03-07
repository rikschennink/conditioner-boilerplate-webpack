webpackJsonp([3],{

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Tests if a media query is matched or not and listens to changes
	 * @module monitors/media
	 */
	(function (win, undefined) {

	    'use strict';

	    var exports = {
	        data: {
	            mql: null
	        },
	        trigger: function (bubble, data) {

	            // if testing for support don't run setup
	            if (data.expected === 'supported') {
	                return;
	            }

	            // if is media query
	            data.change = function () {
	                bubble();
	            };
	            data.mql = win.matchMedia(data.expected);
	            data.mql.addListener(data.change);

	        },
	        parse: function (value) {
	            var results = [];
	            if (value === 'supported') {
	                results.push({
	                    test: 'supported',
	                    value: true
	                });
	            }
	            else {
	                results.push({
	                    test: 'query',
	                    value: value
	                });
	            }
	            return results;
	        },
	        test: {
	            'supported': function () {
	                return 'matchMedia' in win;
	            },
	            'query': function (data) {
	                return data.mql.matches;
	            }
	        },
	        unload: function (data) {
	            data.mql.removeListener(data.change);
	        }
	    };

	    // CommonJS
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = exports;
	    }
	    // AMD
	    else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return exports;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	}(window));

/***/ }

});