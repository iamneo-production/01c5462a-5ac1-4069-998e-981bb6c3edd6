import React from 'react'
import { Link} from "react-router-dom";
import "./Home.css";
export default function 
() {
    return (
        <div id="ebody">
        <div id="errorbody">
        <div id="errormainbody">
            <h1>404</h1>
            <h4>Opps! Page not found</h4>
            <p>Sorry, the page you're looking for dosent't exist.</p>
            <div>
            <Link to="/Login">Login</Link>
            </div>
        </div>
        </div>
      </div>
      
  )
}
