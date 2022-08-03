import React from "react";
import '../App.css'

//need to add a title and dates of musicfest on navbar
function NavBar() {
    return (
        <div className="homepage">
        <nav className="nav bar">
            <ul>
                <li>
                    <a href="Home">Home</a>
                </li>
                <li>
                    <a href="Cart">Cart</a>
                </li>
                <li>
                    <a href="Reviews">Reviews</a>
                </li>
                <li>
                    <a href="Lineup">Lineup</a>
                </li>
                <li>
                    <a href="SignUp">Sign Up</a>
                </li>
            </ul>
        </nav>
    </div>
    );
}
  
export default NavBar;

