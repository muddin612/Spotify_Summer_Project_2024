import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselBody from "./Carousel/CarouselBody";
import Footer from "./footer.jsx";
import Header from "./header/header.jsx";
import Cards from "./History_Body/Cards";
import HistoryPage from "./History_Body/HistoryPage";

function App() {
  return (
    <>
      <Header />
      <hr />
      <CarouselBody />
      <h1 className="container text-center">Listening History</h1>
      <HistoryPage />
      <hr />
      <Footer />
    </>
  );
}

export default App;
