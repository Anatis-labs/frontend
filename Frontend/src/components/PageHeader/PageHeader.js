import React, { Component } from "react";
import "./PageHeader.css";

export default class PageHeader extends Component {
  render() {
    return (
        <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
          </div>
            <h3 className="titel">
              Katternas hemliga sida för hemliga möten
            </h3>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <a class="text-muted" href="/" aria-label="Search" >
            </a>
            <a class="btn btn-sm btn-outline-secondary" href="/signin">
              Sign up
            </a>
          </div>
        </div>
      </header>
    );
  }
}



