import React from "react";

function ArtistCardDetail({show}) {
  return (
    <div>
      <div className="Artist-Info" />
      <ul>
        <li>
          {show.artist_name}
          <br></br>
          {show.genre}
          <br></br>
          Time: {show.time}:00
        </li>
      </ul>
    </div>
  );
}

export default ArtistCardDetail;