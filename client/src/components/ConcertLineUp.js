import React from "react";
import ArtistCard from "./ArtistCard";


function ConcertLineUp({ array, handleCLick, schedule }) {
  const showList = array.map((show) => {
    return <ArtistCard show={show} key={show.id} />;
  });

  return (
    <div>
      <div className="Artist-List">{showList}</div>
    </div>
  );
}

export default ConcertLineUp;
