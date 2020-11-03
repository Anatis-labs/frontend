import React, { Component } from 'react'
import Logo from "./Welcome.jpg";


export default class Welcome extends Component {
    render() {
        return (
            <div>
                 <div className="Stuff">   
                <h1>Välkommna till sidan för kattföreläsningar.</h1>
            <img src={Logo} height="70%" width="70%"  alt="WelcomePicture"/>
            
            </div>
            </div>
        )
    }
}
