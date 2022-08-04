import React from "react";

function ArtistCard({show}) {
  return (
    <div>
      <div className="Artist-Info" />
      <ul>
        <li>
          {show.artist_name}
          <br></br>
          <br></br>
        </li>
      </ul>
    </div>
  );
}

export default ArtistCard;
