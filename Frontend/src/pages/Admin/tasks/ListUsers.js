import React, { Component } from 'react'

export default class ListUsers extends Component {
    render() {
        return (
            <div>
                <p></p>
                <p>id:{this.props.id}  name: {this.props.name} roll: {this.props.Roll}</p>
                <p></p>
            </div>
        )
    }
}
