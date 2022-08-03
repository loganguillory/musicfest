
import React,{ useState, useEffect } from "react";

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
}

export default App;
 