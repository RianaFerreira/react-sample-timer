var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (event) {
    event.preventDefault();

    var strSeconds = this.refs.secondsInput.value;

    console.log('input count', $('input').length);

    // .match method expects a regular expression
    if (strSeconds && strSeconds.match(/^[0-9]*$/)) {
      this.refs.secondsInput.value = '';
      // 10 specifies the base 2 binary, 10 hexidecimal
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="secondsInput" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;