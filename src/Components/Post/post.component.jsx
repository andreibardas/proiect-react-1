import React, { Component } from 'react'

import './post.styles.css'
import Likes from '../Likes/likes.component'

export default class Post extends Component {
    render() {
        return (
            <div
            className="container">
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <Likes/>
            </div>
        )
    }
}
