import React, { Component } from "react";


export default class JumboPost extends Component {
  render() {
    return (
      <>
        <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">
            {this.props.id} text
            </h1>
            <h3 class="mb-0">{this.props.title} titel</h3>
            <div class="mb-1 text-muted">{this.props.date} date</div>
            <p class="card-text mb-auto">
            {this.props.description} text
            </p>
            <a href="/" class="text-white font-weight-bold">
              stäng info rutan
            </a>         
        </div>
      </div>
      </>
    );
  }
}