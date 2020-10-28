import React, { Component } from 'react';

export default class RemoveSeminar extends Component {
    constructor() {
        super();
        this.state = {id: ''};
    }
    deleteSeminar() {
        fetch('https://localhost:44350/api/seminars/'+this.state.id, {
            method: 'DELETE',
            body: JSON.stringify({
                id: this.state.id,
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
                    value={this.state.id} 
                    onChange={(e) => this.setState({ id: e.target.value })}
                />
                <p></p>
                <button onClick={() => this.deleteSeminar()}>Delete</button>
            </div>
        )
    }
}