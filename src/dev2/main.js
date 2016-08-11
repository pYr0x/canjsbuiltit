import stache from 'can-stache/';
import $ from 'jquery';

import 'buildit/button-comp/';

let template = stache('<my-button></my-button>');

$('#output').append(template({}));