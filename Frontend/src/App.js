import "./App.css";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import React from "react";


import PostListing from "./components/postListing/postListing";
import NavScroller from "./components/navScroller/navScroller";
import PageHeader from "./components/PageHeader/PageHeader";
import Construction from "./pages/Construction/construction";
import Teachers from "./pages/Teachers/Teachers";
import Admin from "./pages/Admin/Admin";



function App() {
  return (
    <>
      <div class="container">   
      <PageHeader/>
      <NavScroller/>

      <p></p>
      <Router>
        <Switch>
          <Route path="/teachers" component={Teachers}/> 
          <Route path="/admin" component={Admin}/>   
          <Route path="/signin" component={Construction}/> 
          <Route path="/seminarien" render={props =>
          <div>         
          <PostListing/>
          </div>}/>
          </Switch>    
          </Router>
      </div>
    </>
  );
}
export default App;
