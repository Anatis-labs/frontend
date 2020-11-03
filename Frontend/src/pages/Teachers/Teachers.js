import React, { Component } from 'react'
import Link from "./Pictures/Link.jpg";
import Nessie from "./Pictures/Nessie.jpg";
import "./Teachers.css";

export default class Teachers extends Component {
    render() {
        return (
            <div className="mainDiv">   
            <div className="left">
            <img src={Link} height="50%" width="50%"  alt="Link the rebel"/>
            <h1>Link the rebel</h1>
            <p>Link är en ung herre på 1 år, som är lekful som få.</p>
            </div>

            <div className="right">
            <img src={Nessie} height="50%" width="50%"  alt="Queen Nessie"/>
            <h1>Nessie the queen</h1>
            <p>Nessie är en madam på 6 år, och tror att hon äger världen.</p>
            </div>
            </div>
        )
    }
}



