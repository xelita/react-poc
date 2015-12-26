// main.js
var React = require('react');
var ReactDOM = require('react-dom');

// Reducer

const helloReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Store

const { createStore } = Redux;
const helloStore = createStore(helloReducer);

// Components

// Message component

var HelloMessage = React.createClass({
    render: function () {
        return <li>Hello {this.props.name}!</li>;
    }
});

// Messages list component

var MessageList = React.createClass({
    render: function () {
        var messagesList = this.props.messages || [];
        var componentsList = [];
        messagesList.forEach(function (item) {
            componentsList.push(<HelloMessage key={item.name} name={item.name}/>);
        });

        return <ul>{componentsList}</ul>;
    }
});

//  Rendering

var messages = [
    {name: "xelita"},
    {name: "prism"},
    {name: "cybersami"},
    {name: "mrtot"}
];

const render = () => {
    ReactDOM.render(
        <MessageList messages={messages}/>,
        document.getElementById("container")
    );
};

helloStore.subscribe(render);
render();
