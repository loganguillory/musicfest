import React from 'react';
//import {Route, Switch} from "react-router-dom"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


import './App.css';

import NavBar from './components/NavBar';
import ConcertLineUp from './components/ConcertLineUp';
import HomePage from './components/HomePage';
import Reviews from './components/Reviews';
import ShoppingCart from './components/ShoppingCart';
import SignUp from './components/SignUp';


function App() {
  
  return (
    <Router>
      <NavBar />
      <Switch>   
      <Route path="/ConcertLineUp">
          <ConcertLineUp />
        </Route>    
        <Route path="/HomePage">
          <HomePage />
        </Route>
        <Route path="/Reviews">
          <Reviews />
        </Route>
        <Route path="/ShoppingCart">
          <ShoppingCart />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
//   return (
  
//       <Switch>   
//       <Route path="/ConcertLineUp">
//           <ConcertLineUp />
//         </Route>    
//         <Route path="/HomePage">
//           <HomePage />
//         </Route>
//         {/* <Route path="/ProductPage">
//           <ProductPage />
//         </Route> */}
//         {/* <Route path="/">
//           <Home />
//         </Route> */}
//       </Switch>

//   );
// }

export default App;