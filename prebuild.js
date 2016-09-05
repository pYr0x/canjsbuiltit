var stealconfig  = {
	configMain: 'package.json!npm',
	main: '@empty',
	stealPath: __dirname+'/node_modules/steal/steal.js'
};

var steal = require('steal');

steal.startup(stealconfig).then(function () {
	steal.import('can-stache/src/intermediate_and_imports').then(function (module) {
		var stache = module('<p ($click)="foobar()">Hello</p><p><u>World</u></p>');

		console.log(stache.intermediate);
	});
});

// var live = require('can-view-live');
// require('can-stache/src/intermediate_and_imports');