import React, { Component, PropTypes } from 'react'

export default class ActionBar extends Component {
    render() {
        return (
            <div>
                <button onClick={ () => this.props.onReloadClick() }>reload</button>
                <button onClick={ () => this.props.onClearClick() }>clear</button>
            </div>
        )
    }
}

ActionBar.propTypes = {
    onReloadClick: PropTypes.func.isRequired,
    onClearClick: PropTypes.func.isRequired
};