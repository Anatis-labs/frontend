import React, { Component } from "react";
import Post from "./post/post";

export default class PostListing extends Component {
  constructor() {
    super();
    this.state = {
      seminar: [],
    };
  }
  componentDidMount() {
    fetch('https://localhost:44350/api/seminars')
      .then((response) => response.json())
      .then((json) => this.setState({ seminar: json }));
  }
  render() {
    return (
      <div class="row mb-2">
        {this.state.seminar.map((item) => (
          <Post category={item.id} title={item.title} date={item.date} description={item.description}/>
        ))}
      </div>
    );
  }
}