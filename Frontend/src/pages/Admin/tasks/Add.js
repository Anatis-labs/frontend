import React, { Component } from 'react';

export default class AddSeminar extends Component {
    constructor() {
        super();
        this.state = { titel: '', description: '', date: ''};
    }
    saveSeminar() {
        fetch('https://localhost:44350/api/seminars', {
            method: 'POST',
            body: JSON.stringify({
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
                Titel:
                <p></p>                
                <input 
                    type='text' 
                    value={this.state.title} 
                    onChange={(e) => this.setState({ title: e.target.value })}
                />
                <p></p>
                Description: 
                <p></p>
                <textarea rows="6" cols="25"
                    type='text'
                    value={this.state.description}
                    onChange={(e) => this.setState({ description: e.target.value })}
                />
                <p></p>
                date: 
                <p></p>
                <input
                    type='text'
                    value={this.state.date}
                    onChange={(e) => this.setState({ date: e.target.value })}
                />
                <p></p>
                <button onClick={() => this.saveSeminar()}>Save</button>
            </div>
        )
    }
}