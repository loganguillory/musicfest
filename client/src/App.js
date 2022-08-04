//import {Route, Switch} from "react-router-dom"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import React,{ useState, useEffect } from "react"
import './App.css'
import ConcertLineUp from './components/ConcertLineUp'
import HomePage from './components/HomePage'
import ShoppingCart from './components/ShoppingCart'
import NavBar from './components/NavBar'
import Review from './components/Review'


function App() {
  const [user, setUser] = useState({});
  const [array, setArray] = useState([])
  const [schedule, setSchedule] = useState([])
  const [page, setPage] = useState("/")
  // console.log(array)
  // console.log("hello");
  
  
  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((data) => {
       setArray(data);
      })
  }, []);


  const showList = array.map(show=>{
    return(
      <ConcertLineUp key={show} 
      show={show}/> 
     )
  })
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
        <Review />
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
