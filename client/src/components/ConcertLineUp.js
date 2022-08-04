import React from "react";
import ConcertCard from "./ConcertCard";



function ConcertLineUp({show}) {
  console.log(show)
  return (
    <div>
       {/* {array.map(show => {
        
          // console.log(show.artist_name)
          return ( */}
          
            
           <div className="Artist-List">
            {show.artist_name} 
              
            </div>
        

      
        
             {/* <div key={show.Artist_name} id="concert line-up"> */}
        
    </div>
      
  )
}
  
      

  
  
export default ConcertLineUp; 