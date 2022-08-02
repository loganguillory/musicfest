
import './App.css';
import {useState, useEffect} from "react";



function App() {
  const [user, setUser] = useState("")
  const [concert, setConcert] =([])


  useEffect(() => {
    fetch('http://127.0.0.1:3000/concerts')
    .then(r => r.json())
    .then(data => {
      console.log(data)
    })
  }, [])





  return (
    <div className="App">
      
    </div>
  );
}

export default App;
