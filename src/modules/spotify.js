const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = "http://localhost:3000/jammming";

let token;

const Spotify = {
  grantAccess() {
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}&show_dialog=true`;
  },
  getToken() {
    if (token) {
      return token;
    }

    const urlHash = window.location.hash.substring(1);
    const urlParams = urlHash.split("&");
    const params = urlParams.reduce((accumulator, current) => {
      const [key, value] = current.split("=");
      accumulator[key] = value;
      return accumulator;
    }, {});

    token = params.access_token;

    if (params.access_token && params.expires_in) {
      token = params.access_token;
      const expiresIn = Number(params.expires_in);
      window.setTimeout(() => (token = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");

      return token;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },
  search(term) {
    const accessToken = Spotify.getToken();
    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },
  savePlaylist(name, uris) {
    if (!name || !uris.length) {
      return;
    }
    const accessToken = Spotify.getToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch(`https://api.spotify.com/v1/me/`, {
      headers: headers,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: uris }),
              }
            );
          });
      });
  },
};

export default Spotify;
