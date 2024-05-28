import CarouselBody from "./Carousel/CarouselBody";
import Footer from "./footer.jsx";
import Header from "./header/header.jsx";
import HistoryPage from "./History_Body/HistoryPage";

export default function Home() {
  return (
    <>
      <Header />
      <hr />
      <CarouselBody />
      <h1 className="container text-center">Music Listening History</h1>
      <HistoryPage />
      <hr />
      <Footer />;
    </>
  );
}
