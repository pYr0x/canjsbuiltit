var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
	// main: ["buildit/dev1/main", "buildit/dev2/main"],
	main: ["buildit/dev2/main"],
	// main: "buildit/dev1/main",
	config: __dirname + "/package.json!npm"
},{
	bundleSteal: true,
	minify: false,
	// debug: true,
	// quiet: false,
	// bundleDepth: 3,
	// mainDepth: 3
});