import CarouselBody from "./Carousel/CarouselBody";
import Footer from "./footer.jsx";
import Header from "./header/header.jsx";
import HistoryPage from "./History_Body/HistoryPage";

export default function Home() {
  return (
    <>
      <Header />
      <CarouselBody />
      <div className="container text-center mt-5 p-3">
        <h1 className="display-4 text-center">Music Listening History</h1>
      </div>
      <HistoryPage />
      <Footer />
    </>
  );
}
