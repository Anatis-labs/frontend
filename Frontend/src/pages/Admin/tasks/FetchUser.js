import React, { Component } from "react";
import ListUsers from "./ListUsers";

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
        {this.state.user.map((item) => (
          <ListUsers id={item.id} name={item.name} Roll={item.description}/>
        ))}
      </div>
    );
  }
}