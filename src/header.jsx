import React from "react";
import SpotifyLgo from "./assets/Spotify_logo.png";

function Navbar() {
  const navStyle = {
    backgroundColor: "#1DB954",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
      <a className="navbar-brand" href="main.html">
        <img
          src={SpotifyLgo}
          width="30px"
          height="30px"
          className="d-inline-block align-top"
          alt=""
        />
        Historify
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="main.html">
              Home <span className="visually-hidden">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
