var React = require('react');

var Main = (props) => {
  return (
    <div className="row">
      <div className="columns medium-6 large-4 small-centered">
        <p>Main.jsx rendered</p>
        { props.children }
      </div>
    </div>
  );
};

module.exports = Main;