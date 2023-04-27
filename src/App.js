import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Playlist from "./components/playlist/Playlist";
import Spotify from "./modules/spotify";

function App() {
  const [login, setLogin] = useState(false);
  const [trackArray, setTrackArray] = useState([]);
  const [playlistArray, setPlaylist] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playlistTitle, setPlaylistTitle] = useState("New Playlist");

  const handleLogin = () => {
    window.sessionStorage.setItem('login', !login);
    setLogin(!login);
    Spotify.grantAccess();
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Spotify.search(searchInput).then(setTrackArray);
  };

  const handleTitleChange = (e) => {
    setPlaylistTitle(e.target.value);
  };

  const hanldeAddToPlaylist = (e) => {
    const selectedTrack = e.target.parentElement.id;
    playlistArray.every((track) => track.id.toString() !== selectedTrack) &&
      setPlaylist([
        ...playlistArray,
        trackArray.find((track) => track.id.toString() === selectedTrack),
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
    Spotify.savePlaylist(playlistTitle, uriArray);
  };

  return window.sessionStorage.getItem('login') ? (
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
  ) : (
    <button className="login" onClick={handleLogin}>Login</button>
  );
}

export default App;
