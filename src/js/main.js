var conditioner = require('./modules/lib/conditioner');

conditioner.init({

	// set conditioner monitor paths
	paths:{
		monitors: 'lib/monitors/'
	},

	// AMD loader overrides
	loader:{
		require:function(paths, callback) {

			// get path
			var path = paths[0];

			// get module
			require('async-module!./modules/' + path)(
				callback,
				function onError() {}
			);

		},
		config:function(path, options) { },
		toUrl:function(path) { return path; }
	}

});