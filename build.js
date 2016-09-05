var stealTools = require("steal-tools");

// prod 1
var buildPromise = stealTools.build({
	main: ["buildit/dev1/main", "buildit/dev2/main"],
	config: __dirname + "/package.json!npm",
	jsonOptions: {
		transform: function(load, data) {
			if(data.system) {
				if(data.system.npmIgnore) {
					delete data.system.npmIgnore;
				}
				if(data.system.npmAlgorithm) {
					delete data.system.npmAlgorithm
				}
				if(data.system.configDependencies && data.system.configDependencies.indexOf("live-reload") > -1) {
					data.system.configDependencies.splice(data.system.configDependencies.indexOf("live-reload"), 1);
				}
			}

			return data;
		}
	}
},{
	bundleSteal: false,
	minify: false
});

// prod 2
// var buildPromise = stealTools.build({
// 	main: ["buildit/dev1/main", "buildit/dev2/main"],
// 	config: __dirname + "/package.json!npm"
// },{
// 	bundleSteal: false,
// 	minify: false
// });


// prod 3
// var buildPromise = stealTools.build({
// 	// main: ["buildit/dev1/main", "buildit/dev2/main"],
// 	main: ["buildit/dev2/main"],
// 	// main: "buildit/dev1/main",
// 	config: __dirname + "/package.json!npm"
// },{
// 	bundleSteal: true,
// 	minify: false,
// 	ignore: [
// 		'jquery'
// 	]
// 	// debug: true,
// 	// quiet: false,
// 	// bundleDepth: 3,
// 	// mainDepth: 3
// });

// prod 5
// var buildPromise = stealTools.build({
// 	main: "buildit/dev2/main",
// 	config: __dirname + "/package.json!npm"
// },{
// 	bundleSteal: false,
// 	minify: false
// });