import React, { Component } from "react";
import ListUsers from "./ListUsers";
import RemoveUser from "./RemoveUser";
import "./FetchUser.css"

export default class FetchUsers extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }
  componentDidMount() {
    fetch('https://localhost:44350/api/users')
      .then((response) => response.json())
      .then((json) => this.setState({ user: json }));
  }
  handleClickEvent(id) {
    this.props.onUserClick(id);
  }
  render() {
    return (
      <div>
        <div className="column">  
        {this.state.user.map((item) => (
          <ListUsers id={item.id} name={item.name} email={item.email}/>
        ))}
        </div>
        <div className="column">
          <RemoveUser/>
          </div>
      </div>
    );
  }
}