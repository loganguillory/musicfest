import React from "react";
import '../App.css'



function Reviews() {
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
                    <a className="request" href="AddRequest">Add Request for Item</a>
            </nav>
        </div>
    )
  }
  
export default Tickets;

