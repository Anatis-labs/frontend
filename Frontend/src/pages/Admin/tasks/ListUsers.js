import React, { Component } from 'react'

export default class ListUsers extends Component {
    render() {
        return (
            <>
            <ul>          
                <p>id: {this.props.id}  Namn: {this.props.name}  Roll: {this.props.Roll}</p>                
            </ul>
            </>
        )
    }
}
