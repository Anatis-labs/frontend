import React, { Component } from "react";
import ModalApp from "../ModalApp";

export default class Post extends Component {

  render() {
    return (
      <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">
              {this.props.id}
            </strong>
            <h3 class="mb-0">{this.props.title}</h3>
            <div class="mb-1 text-muted">Föreläsningen äger rum: {this.props.date}</div>
            <p class="card-text mb-auto">Innehåll: {this.props.description}
            </p> 
            Föreläsningen är: {this.props.duration} minuter lång.        
          </div>          
        </div>
        <ModalApp/>
      </div>
    );
  }
}