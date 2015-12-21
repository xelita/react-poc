// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <p>Hello {this.props.name}!</p>;
  }
});

ReactDOM.render(
  <HelloMessage name="Xelita" />,
  document.getElementById("container")
);
