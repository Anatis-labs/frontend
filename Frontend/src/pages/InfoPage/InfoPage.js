import React, { Component } from 'react'

export default class InfoPage extends Component {
    render() {
        return (
            <div>
                <h1>  Titel: {this.props.title}</h1>
                <h3>id: {this.props.id}  Datum: {this.props.date}</h3>
                 <p>{this.props.description}</p>
            </div>
        )
    }
}
