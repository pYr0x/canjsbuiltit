import foo,{zahl,foobar} from 'buildit/module1/module';
// import $ from 'jquery';

// import a css file that is not located under the directories.lib
import 'css/style.css';

document.getElementById('output').innerHTML = foo+' '+zahl;