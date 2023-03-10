import React from "react";
import { Link } from "react-router-dom";
import './LinkButton.css'
export default function LinkButton({img,LinkTo,to}){
    return <div className="LinkButtonBox">
        <div className="Lala">
        <img className="LinkToImg" src={img}></img>
        <Link to={to}><h3 className="LinkTo">{LinkTo}</h3></Link>
        </div>
    </div>
}