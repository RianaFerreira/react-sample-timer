var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation with the css-loader installed
// config sassLoader in webpack instead
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Custom css styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  // router component setup
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/countdown" component={Countdown}/>
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);