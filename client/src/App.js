
import React,{ useState, useEffect } from "react";
import React from "react";
import './App.css';
import ConcertLineUp from './Components/ConcertLineUp';
import HomePage from './Components/HomePage';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  const [user, setUser] = useState({});
  const [array, setArray] = useState([])
  // console.log(array)
  // console.log("hello");
  useEffect(() => {
    fetch("/concerts")
      .then((r) => r.json())
      .then((data) => {
       setArray(data);
      });
  }, []);

  return (
    <div className="App"></div>
  )
  }
  return <div className="App"></div>;


function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <ConcertLineUp />
      <HomePage />
      <ShoppingCart />
    </div>
  );
}

export default App;
