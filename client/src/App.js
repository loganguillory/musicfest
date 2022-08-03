import React from "react";
import './App.css';
import ConcertLineUp from './Components/ConcertLineUp';
import HomePage from './Components/HomePage';
import ShoppingCart from './Components/ShoppingCart';

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
