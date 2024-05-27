import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./footer.jsx";
import Header from "./header/header.jsx";

function App() {
  return (
    <>
      <Header />
      <h1>Body text</h1>
      <Footer />
    </>
  );
}

export default App;
