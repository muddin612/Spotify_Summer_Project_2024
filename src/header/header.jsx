import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SpotifyLogo from "../assets/SpotifyLogoBlack.png";
import NavLink from "./NavLink";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  const navStyle = {
    backgroundColor: "#1DB954",
  };

  return (
    <Navbar expand="lg" style={navStyle}>
      <Container>
        <Navbar.Brand className="text-dark" as={Link} to="/">
          <img
            src={SpotifyLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Spotify Listing History
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink />
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
