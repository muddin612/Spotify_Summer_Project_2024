import SearchBar from "./SearchBar";
import Nav from "react-bootstrap/Nav";

export default function NavLink() {
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link className="text-white" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="text-white" href="#about">
          About
        </Nav.Link>
      </Nav>
    </>
  );
}
