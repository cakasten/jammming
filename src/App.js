import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Playlist from "./components/playlist/Playlist";

function App() {
  const trackArray = [
    {
      artist: "King Gizzard and The Lizard Wizard",
      name: "Intrasport",
      album: "K.G.",
      id: 7,
    },
    {
      artist: "Red Hot Chili Peppers",
      name: "By The Way",
      album: "By The Way",
      id: 6,
    },
    {
      artist: "Khruangbin",
      name: "Dern Kala",
      album: "The Universe Smiles upon You",
      id: 3,
    },
  ];

  const [playlistArray, setPlaylist] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("New Playlist");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTitleChange = (e) => {};

  const hanldeAddToPlaylist = (e) => {
    const selectedTrack = e.target.parentElement.id;
    setPlaylist((playlistArray) => [
      ...playlistArray,
      trackArray[selectedTrack],
    ]);
  };

  const handleRemoveFromPlaylist = (e) => {
    const selectedTrack = e.target.parentElement.id;
    setPlaylist(
      playlistArray.filter((track) => track.id.toString() !== selectedTrack)
    );
  };

  return (
    <>
      <div id="search">
        <SearchBar
          onchange={handleInputChange}
          submit={handleSubmit}
          search={searchInput}
        />
      </div>
      <div id="list">
        <SearchResults
          tracks={trackArray}
          addToPlaylist={hanldeAddToPlaylist}
        />
        <Playlist
          playlist={playlistArray}
          title={playlistTitle}
          removeFromPlaylist={handleRemoveFromPlaylist}
          titleChange={handleTitleChange}
        />
      </div>
      <button onClick={hanldeAddToPlaylist}>Save to Spotify</button>
    </>
  );
}

export default App;
