import React, { Component } from 'react'

import './custom-button.styles.css'

export default class CustomButton extends Component {
    render() {
        return (
            <div>
                <button 
                className="custom-button" 
                onClick={this.props.onClick}> 
                {this.props.name}
                </button>
            </div>
        )
    }
}
