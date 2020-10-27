import Logo from "./construction.png";
import "./construction.css";

import React, { Component } from 'react'

export default class construction extends Component {
    render() {
        return (
            <div className="Stuff">   
                <h1>Loggin funktionen är för tillfället under konstruktion</h1>
            <img src={Logo} height="50%" width="50%"  alt="Cat construction team"/>
            <h5>(oklart när det är färdigt, mycket garn att reda ut)</h5>
            </div>
        )
    }
}


