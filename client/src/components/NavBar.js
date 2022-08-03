import React from "react";
import '../App.css'


//need to add a title and dates of musicfest on navbar
function NavBar() {
    return (
        <div className="homepage">
            <nav className="nav">
                <ul>
                    <li>
                        <a href="Home">Home</a>
                    </li>
                    <li>
                        <a href="Tickets">Tickets</a>
                    </li>
                    <li>
                        <a href="Lineup">Lineup</a>
                    </li>
                </ul>
                    
            </nav>
        </div>
    )
  }
  
export default NavBar;

