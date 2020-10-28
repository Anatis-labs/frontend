import React, { Component } from 'react';

export default class RemoveUser extends Component {
    constructor() {
        super();
        this.state = {id: ''};
    }
    deleteUser() {
        fetch('https://localhost:44350/api/Users/'+this.state.id, {
            method: 'DELETE',
            body: JSON.stringify({
                id: this.state.id,
            }), 
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }
    render() {
        return (
            
            <div>
                id:
                <p></p>                
                <input 
                    type='text' 
                    value={this.state.id} 
                    onChange={(e) => this.setState({ id: e.target.value })}
                />
                <p></p>
                <button onClick={() => this.deleteUser()}>Delete</button>
            </div>
        )
    }
}