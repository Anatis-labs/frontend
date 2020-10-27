import React, { Component } from 'react';

export default class RemoveSeminar extends Component {
    constructor() {
        super();
        this.state = {id: '', titel: '', description: '', date: ''};
    }
    deleteSeminar() {
        fetch('https://localhost:44350/api/seminars', {
            method: 'DELETE',
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                description: this.state.description,
                date: this.state.date,
            }), 
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }
    render() {
        return (
            
            <div className="Stuff">
                id:
                <p></p>                
                <input 
                    type='text' 
                    value={this.state.title} 
                    onChange={(e) => this.setState({ title: e.target.value })}
                />
                <p></p>
                <button onClick={() => this.deleteSeminar()}>Delete</button>
            </div>
        )
    }
}