import Nav from "react-bootstrap/Nav";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./Nav.css";

export default function NavLink() {
  return (
    <>
      <Nav className="me-auto">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/podcast">Podcast</CustomLink>
        <CustomLink to="/lookup">Search Spotify</CustomLink>
      </Nav>
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isMatch = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <Nav.Link
      className={isMatch ? "text-white active" : "text-white"}
      as={Link}
      to={to}
      {...props}
    >
      {children}
    </Nav.Link>
  );
}
