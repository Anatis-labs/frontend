import React, { Component } from "react";

export default class NavScroller extends Component {
  render() {
    return (
      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
        <a class="p-2 text-muted" href="#">
            Start
          </a>  
          <a class="p-2 text-muted" href="#">
            Kommande Seminarien
          </a>
          <a class="p-2 text-muted" href="#">
            Seminarien som har varit
          </a>
          <a class="p-2 text-muted" href="#">
            Lärare
          </a>
          <a class="p-2 text-muted" href="#">
            Admin
          </a>
                      
        </nav>
      </div>
    );
  }
}
