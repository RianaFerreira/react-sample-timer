var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');

// Load foundation with the css-loader installed
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // router component setup
  <Router history={hashHistory}>
    <Route path="/" component={Main}></Route>
  </Router>,
  document.getElementById('app')
);