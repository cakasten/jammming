import React from "react";
import Card from "../card/Card";
import Track from "../track/Track";
import styles from "./Playlist.module.css";

function Playlist({ playlist, title, removeFromPlaylist, titleChange }) {
  return (
    <Card className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={title}
        onChange={titleChange}
      />
      {playlist.length > 0 ? (
        playlist.map((track) => (
          <Track
            add={false}
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
