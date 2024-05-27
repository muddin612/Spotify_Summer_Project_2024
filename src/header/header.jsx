import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import SpotifyLogo from "../assets/SpotifyLogoBlack.png";
import NavLink from "./NavLink";

function Header() {
  const navStyle = {
    backgroundColor: "#1DB954",
  };

  return (
    <Navbar expand="lg" style={navStyle}>
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          <img
            src={SpotifyLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
