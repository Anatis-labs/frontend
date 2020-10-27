import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import AddSeminar from './tasks/Add';
import AdminMenu from "./AdminMenu";
import RemoveSeminar from "./tasks/RemoveSeminars";
import FetchUsers from "./tasks/FetchUser";
import AdminStart from "./AdminStart";




export default class Admin extends Component {
    constructor() {
        super();
        this.state = { seminars: [] };
    }
    render() {
        return (
            <>
            <AdminMenu />
        <Router>
            <Switch> 
                <Route path="/admin/add" component={AddSeminar}/>  
                <Route path="/admin/remove" component={RemoveSeminar}/>  
                <Route path="/admin/users" component={FetchUsers}/>                   
                <Route path="/admin" component={AdminStart}/>             
                </Switch>
                </Router>
            </>
        )
    }
}
