// load conditioner
require(['./lib/conditioner'],function(conditioner) {

    conditioner.init({

		// AMD loader overrides
		loader:{
			require:function(paths, callback) {

				var path = paths[0];

				console.log(path);

				require('async-module!./ui/' + path)(
					callback,
					function onError() {
						// error happened
					});

			},
			config:function(path,options) {},
			toUrl:function(path) { return path; }
		}

	});

});