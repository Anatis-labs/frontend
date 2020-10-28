import React, { Component } from 'react'


export default class ListUsers extends Component {
    render() {
        return (
            <>
            <ul>               
                <table>
                <tr className="space">      
                <th>id: {this.props.id} </th>
                <th>Namn: {this.props.name}  </th> 
                <th>Email:{this.props.email}  </th> 
                </tr>  
                </table>                          
            </ul>
            </>
        )
    }
}
