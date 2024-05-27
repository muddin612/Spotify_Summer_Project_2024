function Footer() {
  const footerStyles = {
    backgroundColor: "#1DB954",
    color: "#FFFFFFF",
    textAlign: "center",
    flexShrink: 0,
    padding: "1rem 0",
  };

  return (
    <footer
      id="sticky-footer"
      className="footer text-white text-center flex-shrink-0 py-4"
      style={footerStyles}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Mohammed Uddin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
