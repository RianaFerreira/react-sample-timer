var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      timer: 0,
      timerStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ timer: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  },
  handleStatusChange: function (newStatus) {
    this.setState({ timerStatus: newStatus });
  },
  render: function () {
    var { timer, timerStatus } = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={ timer } />
        <Controls countdownStatus={ timerStatus } onStatusChange={ this.handleStatusChange }/>
      </div>
    );
  }
});

module.exports = Timer;