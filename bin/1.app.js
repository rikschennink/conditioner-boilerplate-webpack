webpackJsonp([1],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Tests if an active network connection is available and monitors this connection
	 * @module monitors/connection
	 */
	(function (win, undefined) {

	    'use strict';

	    var exports = {
	        trigger: {
	            'online': win,
	            'offline': win
	        },
	        test: {
	            'any': function (data) {
	                return data.expected;
	            }
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