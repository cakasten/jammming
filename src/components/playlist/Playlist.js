import React from "react";
import Card from "../card/Card";
import Track from "../track/Track";

function Playlist({ playlist }) {
  return (
    <Card>
      {playlist.length > 0 ? (
        playlist.map((track) => (
          <Track
            name={track.name}
            artist={track.artist}
            album={track.album}
            id={track.id}
          />
        ))
      ) : (
        <p>Add songs to your playlist.</p>
      )}
    </Card>
  );
}

export default Playlist;
