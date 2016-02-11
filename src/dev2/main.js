import stache from 'can/view/stache/';
import $ from 'jquery';

import 'buildit/button-comp/';

let tempalte = stache('<my-button></my-button>');

$('#output').append(tempalte({}));