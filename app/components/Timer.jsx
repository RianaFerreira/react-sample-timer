var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="page-title text-center">Timer</h1>
        <Clock />
      </div>
    );
  }
});

module.exports = Timer;