
import React,{ useState, useEffect } from "react";
import React from "react";
import './App.css';
import ConcertLineUp from './Components/ConcertLineUp';
import HomePage from './Components/HomePage';
import ShoppingCart from './Components/ShoppingCart';
import NavBar from './Components/NavBar'

function App() {
  const [user, setUser] = useState("");
  const [concertData, setConcertData] = useState([]);
  // console.log(concertData);
  // console.log("hello");
  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((data) => {
       setConcertData(data);
      });
  }, []);

  return <div className="App"></div>;


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ConcertLineUp />
      <HomePage />
      <ShoppingCart />
      <NavBar />
    </div>
  );
}
}
export default App;
