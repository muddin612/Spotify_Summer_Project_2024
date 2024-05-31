function Footer() {
  const footerStyles = {
    backgroundColor: "#1DB954",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "1rem 0",
    marginTop: "auto",
  };

  return (
    <footer
      id="sticky-footer"
      className="footer text-white text-center flex-shrink-0 py-4"
      style={footerStyles}
    >
      <div className="container text-dark">
        <p>
          &copy; {new Date().getFullYear()} Mohammed Uddin and Michael Fleurimon
          and . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
