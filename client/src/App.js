
import React,{ useState, useEffect } from "react";

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

export default App;
