var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on starts status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.handleStatusChange('started');
    expect(timer.state.timer).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.timer).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ timer: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.timer).toBe(10);
      done();      
    }, 1001);
  });

  it('should clear timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({ timer: 10 });
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.timer).toBe(0);
      done();      
    }, 1001);
  });  
});
