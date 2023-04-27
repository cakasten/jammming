import React from "react";
import Card from "../card/Card";
import styles from "./Track.module.css";

function Track({
  artist,
  name,
  album,
  addToPlaylist,
  removeFromPlaylist,
  id,
  add,
  albumCover,
}) {
  return (
    <Card
      className={`${styles.track} ${styles.text}`}
      albumArt={albumCover}
      addToPlaylist={addToPlaylist}
      id={id}
    >
      {add ? (
        <span className={styles.addRemove} onClick={addToPlaylist}>
          +
        </span>
      ) : (
        <span className={styles.addRemove} onClick={removeFromPlaylist}>
          -
        </span>
      )}

      <h3 className={styles.title}>{name}</h3>
      <p>{artist}</p>
      <p>{album}</p>
    </Card>
  );
}

export default Track;
