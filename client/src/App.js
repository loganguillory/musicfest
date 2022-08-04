
import React,{ useState, useEffect } from "react"
import './App.css'
import ConcertLineUp from './components/ConcertLineUp'
import HomePage from './components/HomePage'
import ShoppingCart from './components/ShoppingCart'
import NavBar from './components/NavBar'
import Review from './components/Review'
import ArtistCard from './components/ArtistCard'
import {Switch, BrowserRouter as Router, Route, NavLink} from "react-router-dom"

function App() {
  const [user, setUser] = useState({});
  const [array, setArray] = useState([])
  const [schedule, setSchedule] = useState({})
  const [page, setPage] = useState("/")
  const [reviewArray, setReviewArray] = useState({})
  // console.log(array)
  // console.log("hello");
  
  
  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((data) => {
       setArray(data);
      })
  }, []);


  useEffect(()=> {
    fetch('reviews')
    .then(response => response.json())
    .then((data )=>{
      console.log(data)

    })
  })

  
  
  function handleClick(concert){
  setSchedule(concert)
  
    
  }
  return (

  
    <Router>
    <div className="App">
      <NavBar onChangePage={setPage}/>
      
    <div className= 'page-container'>
      <h1>WELCOME! </h1>

    <div class="c-homehero_wrapper">
        <div class="c-homehero_container show">
          <div class="c-homehero_textContent">
            <br></br>
            <span class="c-homehero_title">April 21st-23rd, 2023</span>
            <br></br>
            <span class="c-homehero_subTitle">
              <b>See you in the flatlands</b>
            </span>
          </div>
          <div id="buybutton">
           <button class="c-primaryButton c-featuredContent__button deactivate"></button>
            <a class="c-button button-large">Buy Tickets!</a>
          </div>
        </div>
    </div>
        <Switch>

          <Route path= "/reviews">
            <Review />
          </Route>

          <Route path="/lineup">
         <ConcertLineUp handleClick={handleClick} array={array} schedule={schedule}/>
          </Route>

          <Route path="/">
           <HomePage array={array}/>
          </Route>

          <Route path= "/shopping-cart">
            <ShoppingCart/>
          </Route>

        </Switch>

  </div>
  </div>
  </Router>
  )
}

export default App;
