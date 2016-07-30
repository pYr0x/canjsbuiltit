import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import {foobar} from 'buildit/module1/module';

import './button-comp.scss!';
import template from './button-comp.stache!';

export const ViewModel = Map.extend({
	name: foobar,
	click: () =>
		console.log("test")

});

export default Component.extend({
	tag: 'my-button',
	viewModel: ViewModel,
	template
});