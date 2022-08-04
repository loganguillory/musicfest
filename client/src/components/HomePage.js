import React from "react";
import ArtistCardDetail from "./ArtistCardDetail";

function HomePage({ array }) {
  
  const concertDetails = array.map((concert) => {
    return <ArtistCardDetail show={concert} key={concert.id} />;
  });

  return(

   <div className="HomePage">
    {concertDetails}
   </div>
  )
  }

export default HomePage;
