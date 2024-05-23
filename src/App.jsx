import { useState } from "react";
import "./App.css";
import Footer from "./footer.jsx";
import Navbar from "./header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>Body text</h1>
      <Footer />
    </>
  );
}

export default App;
