import React, { Component, PropTypes } from 'react'
import Message from './message'

export default class MessageList extends Component {
    render() {
        return (
            <ul>
                {this.props.messages.map((item, index) =>
                    <Message key={index} name={item.name}/>
                )}
            </ul>
        )
    }
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired).isRequired
};