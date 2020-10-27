import React, { Component } from "react";


export default class FetchOneUser extends Component {
  constructor() {
    super();
    this.state = { user: null};
  }



  componentDidMount() {
    this.FetchUser();
  }

  FetchUser() {
    fetch('https://localhost:44350/api/users')
    .then((response) => response.json())
    .then((json) => this.setState({ user: json }));
  }

  render() {
    return (
      <>
      <div>
        {this.state.user != null ? <>name: {this.state.user.name}</> : null}         
        
   </div>
   </>
 );
}
}
