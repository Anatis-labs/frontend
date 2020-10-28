import React, { Component } from 'react'

export default class Experiment extends Component {
    
    saveToSeminar() {
        fetch('https://localhost:44350/api/UserSeminar', {
            method: 'POST',
            body: JSON.stringify({
                seminarId: this.state.seminarId,
                userId: this.state.userId,
                name: this.state.name,     
                email: this.state.email,
            }), 
            headers: { 'Content-type': 'application/json; charset=UTF-8'}
        });
    }

    render() {
        return (
            <div>
                <div className="Stuff">
                Namn:
                <p></p>                
                <input 
                    type='text' 
                    value={this.props.name} 
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <p></p>
                Email: 
                <p></p>
                <input
                    type='text'
                    value={this.props.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                />
                <p></p>
                
                <button onClick={() => this.saveToSeminar()}>Save</button>
            </div>
            </div>
        )
    }
}