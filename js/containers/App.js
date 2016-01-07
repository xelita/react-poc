import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import MessageList from '../components/messageList'
import ActionBar from '../components/actionBar'

import {loadMessages, addMessage, removeMessage, removeAllMessages} from '../actions/actionCreators'

export default class App extends Component {
    render() {
        // Injected by connect() call:
        const { dispatch, messages } = this.props;

        let dom =
            <div>
                <MessageList messages={messages}/>
                <ActionBar
                    onReloadClick={ () => dispatch(loadMessages()) }
                    onClearClick={ () => dispatch(removeAllMessages()) }
                />
            </div>;

        return dom;
    }
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        messages: state.messages
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)