// main.js
var React = require('react');
var ReactDOM = require('react-dom');

// HelloMessage component

var HelloMessage = React.createClass({
    render: function() {
        return <li>Hello {this.props.name}!</li>;
    }
});

// Messages list component

var MessageList = React.createClass({
    render: function() {
        var messagesList = this.props.messages || [];
        var componentsList = [];
        messagesList.forEach(function(item){
            componentsList.push(<HelloMessage key={item.name} name={item.name}/>);
        });

        return <ul>{componentsList}</ul>;
    }
});

// Application rendering

var messages = [
    {name: "xelita"},
    {name: "prism"},
    {name: "cybersami"},
    {name: "mrtot"},
];

ReactDOM.render(
    <MessageList messages={messages}/>,
    document.getElementById("container")
);
