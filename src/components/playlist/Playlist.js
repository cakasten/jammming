import React from "react";
import Card from "../card/Card";
import Track from "../track/Track";
import styles from "./Playlist.module.css";

function Playlist({ playlist, title, removeFromPlaylist }) {
  return (
    <Card className={styles.container}>
      <h1>{title}</h1>
      {playlist.length > 0 ? (
        playlist.map((track) => (
          <Track
            name={track.name}
            artist={track.artist}
            album={track.album}
            id={track.id}
            key={track.id}
            removeFromPlaylist={removeFromPlaylist}
          />
        ))
      ) : (
        <>
          <p>Add songs to your playlist.</p>
        </>
      )}
    </Card>
  );
}

export default Playlist;
