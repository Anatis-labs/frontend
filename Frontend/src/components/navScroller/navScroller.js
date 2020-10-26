import React, { Component } from "react";
import "./navScroller.css";

export default class NavScroller extends Component {
  render() {
    return (
      <div className="Box">
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
        <a className="p-2 text-muted" href="/">
            Start
          </a>  
          <a class="p-2 text-muted" href="/Seminarien/">
            Seminarien
          </a>
          <a class="p-2 text-muted" href="/teachers">
            Lärare
          </a>
          <a class="p-2 text-muted" href="/admin">
            Admin
          </a>                      
        </nav>
      </div>
    </div>
    );
  }
}