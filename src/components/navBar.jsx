import React from 'react'
//import {BsFillCartCheckFill} from "react-icons/bs";
import {ImTv} from "react-icons/im";
import { Link } from "react-router-dom";

function NavBar({ listNum }) {
    return (
    <div className="navBar">
    <Link to="/">Lista filmova</Link>
      <Link to="/list" className="cart-items">
        <ImTv />
        <p className="cart-num">{listNum}</p>
      </Link>
        </div>
    );
}

export default NavBar;

