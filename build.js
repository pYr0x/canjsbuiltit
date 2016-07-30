var stealTools = require("steal-tools");

//prod 1
// var buildPromise = stealTools.build({
// 	main: ["buildit/dev1/main", "buildit/dev2/main"],
// 	config: __dirname + "/package.json!npm"
// },{
// 	bundleSteal: true,
// 	minify: false
// });

// prod 2


// prod 3
var buildPromise = stealTools.build({
	// main: ["buildit/dev1/main", "buildit/dev2/main"],
	main: ["buildit/dev2/main"],
	// main: "buildit/dev1/main",
	config: __dirname + "/package.json!npm"
},{
	bundleSteal: true,
	minify: false,
	ignore: [
		'jquery'
	]
	// debug: true,
	// quiet: false,
	// bundleDepth: 3,
	// mainDepth: 3
});