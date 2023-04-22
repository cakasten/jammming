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
      uri: "asfgartabrtbadfhsfdhkghjhsdfb",
    },
    {
      artist: "Red Hot Chili Peppers",
      name: "By The Way",
      album: "By The Way",
      id: 6,
      uri: "asdvacsvkw4t2o4r234sadvvax",
    },
    {
      artist: "Khruangbin",
      name: "Dern Kala",
      album: "The Universe Smiles upon You",
      id: 3,
      uri: "24895rgadfbvcsvb98qe4tmldf",
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

  const handleTitleChange = (e) => {
    setPlaylistTitle(e.target.value);
    console.log(playlistTitle);
  };

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

  const handleSave = () => {
    const uriArray = [];
    playlistArray.map((track) => uriArray.push(track.uri));
    console.log(uriArray);
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
      <button onClick={handleSave}>Save to Spotify</button>
    </>
  );
}

export default App;
