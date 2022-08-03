import React from "react";
import '../App.css'
<<<<<<< HEAD

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
=======
import {NavLink} from "react-router-dom"


function NavBar() {
    return (
        <div className="homepage">
            <nav className="nav">
               
                        <NavLink exact to="/">Home</NavLink>
                   <br>
                   </br>
                        <NavLink to="reviews">Critic's Reviews</NavLink>
                   <br>
                   </br>
                        <NavLink to="lineup">2023 LineUp</NavLink>
                   <br></br>
                 <h1>
                    Not a member? sign up now!
                 </h1>
                 <form action="/users" method="post">
                    <input type="hidden" name="authenticity_token" value="<=form_authenticity_token %>"/>

                    <label for="username">Username</label>
                    <input type="Username" id="username" name="user[username]" />

                    <label for="password">Password</label> 
                    <input type="password" id="password" name="user[password]"/>
                    <input type="submit" value="Signup!"/>
                 </form>
                 
            </nav>
        </div>
    )
  }
>>>>>>> 15cf15fa88b98620c6cead63f356156a5b8ea264
  
export default NavBar;

