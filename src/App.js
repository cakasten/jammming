import "./App.css";
import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import SearchResults from "./components/searchResults/SearchResults";
import Track from "./components/track/Track";

function App() {
  const trackArray = [
    { artist: "KGLW", name: "Robot Stop", album: "Nonagon Infinity", id: 1 },
    { artist: "RHCP", name: "By The Way", album: "By The Way", id: 6 },
  ];
  const [track, setTrack] = useState(trackArray[1]);

  return (
    <div id="container">
      <SearchBar />
      <SearchResults />
      <Track
        name={trackArray[0].name}
        artist={trackArray[0].artist}
        album={trackArray[0].album}
      />
    </div>
  );
}

export default App;
