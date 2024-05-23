import React from "react";
import SpotifyLgo from "./assets/Spotify_logo.png";

function Navbar() {
  const navStyle = {
    backgroundColor: "#191414",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={SpotifyLgo}
            width="30px"
            height="30px"
            className="d-inline-block align-top"
            alt=""
          />
          Spotify Listing History
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
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
