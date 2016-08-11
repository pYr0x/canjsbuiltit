import Component from 'can-component/';
import DefineMap from 'can-define/map/map';
import {foobar} from 'buildit/module1/module';

import './button-comp.less';
import template from './button-comp.stache!';

export const ViewModel = DefineMap.extend({
	name: foobar,
	click: () =>
		console.log("test")

});

export default Component.extend({
	tag: 'my-button',
	ViewModel: ViewModel,
	template
});