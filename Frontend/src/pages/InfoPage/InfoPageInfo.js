import React, { Component } from "react";
import InfoPage from "./InfoPage";

export default class InfoPageInfo extends Component {
  constructor() {
    super();
    this.state = {
      seminar: [],
    };
  }
  componentDidMount() {
    fetch('https://localhost:44350/api/seminars/1')
      .then((response) => response.json())
      .then((json) => this.setState({ seminar: json }));
  }
  render() {
    return (
      <div class="row mb-2">
        {this.state.seminar.((item) => (
          <InfoPage category={item.id} title={item.title} date={item.date} description={item.description}/>
        ))}
      </div>
    );
  }
}
