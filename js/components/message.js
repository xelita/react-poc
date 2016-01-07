import React, { Component, PropTypes } from 'react'

export default class Message extends Component {
    render() {
        return (
            <li>Hello {this.props.name}!</li>
        )
    }
}

Message.propTypes = {
    name: PropTypes.string.isRequired
};