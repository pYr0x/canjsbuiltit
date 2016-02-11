var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
	main: ["buildit/dev1/main", "buildit/dev2/main"],
	config: __dirname + "/package.json!npm"
	//bundlesPath: __dirname+"/dist/bund"
},{
	bundleSteal: true,
	// the following are the default values, so you don't need
	// to write them.
	minify: true,
	debug: false,
	quiet: false,
	bundleDepth: 3,
	mainDepth: 3
});