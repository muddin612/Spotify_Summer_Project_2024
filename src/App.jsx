import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Podcast from "./pages/Podcast";
import LookUp from "./pages/LookUp";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/lookup" element={<LookUp />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
