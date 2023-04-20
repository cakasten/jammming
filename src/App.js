import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Track from "./components/track/Track";
import Tracklist from "./components/tracklist/Tracklist";
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
  const [track, setTrack] = useState(trackArray[0]);
  const [playlistArray, setPlaylistArray] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addTrackToPlaylist = () => {
    setTrack();
  };

  return (
    <div id="container">
      <SearchBar
        onchange={handleInputChange}
        submit={handleSubmit}
        search={searchInput}
      />
      <SearchResults />
      <Tracklist tracks={trackArray} />
      <button>Save to Spotify</button>
      <Playlist playlist={playlistArray} />
    </div>
  );
}

export default App;
