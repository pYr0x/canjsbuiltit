var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
	main: ["buildit/dev1/main", "buildit/dev2/main"],
	//main: "buildit/dev2/main",
	config: __dirname + "/package.json!npm",
	bundlesPath: "dist/bundles"
},{
	bundleSteal: true,
	ignore: [
		"jquery",
		"sass.js"
	],
	minify: false,
	debug: true,
	quiet: false,
	bundleDepth: 3,
	mainDepth: 3
});