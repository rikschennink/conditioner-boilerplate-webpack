// load conditioner
require(['./lib/conditioner'],function(conditioner) {

    conditioner.init({

		// AMD loader overrides
		loader:{
			require:function(paths, callback) {
				require('async-module!./ui/' + paths[0])(
					callback,
					function onError() {}
				);
			},
			config:function(path,options) {},
			toUrl:function(path) { return path; }
		}

	});

});