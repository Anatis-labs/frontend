import React, { Component } from "react";
import Modal from "./Modal";
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
      <>
      <div class="row mb-2">
        {this.state.seminar.map((item) => (
          <Post id={item.id} title={item.title} date={item.date} description={item.description} duration={item.duration}/>
        ))}
      </div>
        {this.state.seminar.map((item) => (
          <Modal id={item.id} title={item.title} date={item.date} description={item.description}/>
        ))}
      </>
    );
  }
}