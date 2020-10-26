import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import PostListing from "./components/postListing/postListing";
import NavScroller from "./components/navScroller/navScroller";
import PageHeader from "./components/PageHeader/PageHeader";
import JumboPost from "./components/jumbopost/jumbopost";
import Construction from "./pages/Construction/construction";
import Teachers from "./pages/Teachers/Teachers";
import Admin from "./pages/Admin/Admin";
import ListUsers from "./pages/Admin/tasks/ListUsers";
import FetchUsers from "./pages/Admin/tasks/FetchUsers";


function App() {
  return (
    <>
      <div class="container">   
      <PageHeader/>
      <NavScroller/>
      <ListUsers/>
      <FetchUsers/>
      <p></p>
      <Router>
        <Switch>
          <Route path="/teachers" component={Teachers}/> 
          <Route path="/admin" component={Admin}/>   
          <Route path="/signin" component={Construction}/> 
          <Route path="/about" component={PostListing}/>
          <Route path="/seminarien" render={props =>
          <div>
          <JumboPost/>
          <PostListing/>
          </div>}/>
          </Switch>    
          </Router>
      </div>
    </>
  );
}
export default App;
