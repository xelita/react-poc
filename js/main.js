let React = require('react');
let ReactDOM = require('react-dom');

import LOAD_MESSAGES from './actions/actionTypes'
import REMOVE_ALL_MESSAGES from './actions/actionTypes'

// Reducer

const helloReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_MESSAGES:
            return loadMessages(state, action);
        case REMOVE_ALL_MESSAGES:
            return removeAllMessages(state, action);
        default:
            return state;
    }
}

const loadMessages = (state, action) => {
    return action.messages || [];
};

const removeAllMessages = (state, action) => {
    return [];
};

// Store

const { createStore } = Redux;
const helloStore = createStore(helloReducer);

// Components

// Message component

const HelloMessage = React.createClass({
    render: function () {
        return <li>Hello {this.props.name}!</li>;
    }
});

// Messages list component

const MessageList = () => (
    <ul>
    {
        helloStore.getState()
            .map((item) => <HelloMessage key={item.name} name={item.name}/>)
    }
    </ul>
);

// Messages list component

const ActionBar = ({
    onReload,
    onClear
}) => (
    <div>
        <button onClick={onReload}>reload</button>
        <button onClick={onClear}>clear</button>
    </div>
);

//  Rendering

var messages = [
    {name: "xelita"},
    {name: "prism"},
    {name: "cybersami"},
    {name: "mrtot"}
];

const render = () => {
    ReactDOM.render(
        <div>
            <MessageList messages={helloStore.getState()}/>
            <ActionBar
                onReload={() => helloStore.dispatch({type: LOAD_MESSAGES, messages: messages})}
                onClear={() => helloStore.dispatch({type: REMOVE_ALL_MESSAGES})} />
        </div>,
        document.getElementById("container")
    );
};

helloStore.subscribe(render);
render();
