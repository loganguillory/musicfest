import React,{ useState, useEffect } from "react"
import './App.css'
import ConcertLineUp from './components/ConcertLineUp'
import HomePage from './components/HomePage'
import ShoppingCart from './components/ShoppingCart'
import NavBar from './components/NavBar'
import Review from './components/Review'
import {Switch, BrowserRouter as Router, Route, NavLink} from "react-router-dom"

function App() {
  const [user, setUser] = useState({});
  const [array, setArray] = useState([])
  const [schedule, setSchedule] = useState([])
  const [page, setPage] = useState("/")
  const [reviewsArray, setReviewsArray] = useState([])
  
  // console.log(array)
  // console.log("hello");
  
  
  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((data) => {
       setArray(data);
      })
  }, []);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => {
       setReviewsArray(data);
      })
  }, []);


  const showList = array.map(show=>{
    return(
      <ConcertLineUp key={show} 
      show={show}/>                                 
     )
  })

  const reviewsList = reviewsArray.map(review =>{
    return(
      <Review key={review} 
      review={review}/> 
  )} 
)
  function handleConcertClick(concert){
   setSchedule(concert)
  }

  return (
    <Router>
    <div className="App">
      
      <NavBar onChangePage={setPage}/>
      
    <div className= 'page-container'>
    <h1>WELCOME! </h1>
    <Switch>
      
      <Route path= "/reviews">
        <Review  ListofReviews ={reviewsList} />
      </Route>
   
      <Route path="/">
      {showList}
     
      </Route>
        
        <Route path="/lineup">
          {showList}
          
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
