import Cards from "./Cards";

import Car2 from "../assets/car2.jpg";
import Car1 from "../assets/cars.jpg";
import Car3 from "../assets/car3.jpg";

export default function HistoryPage() {
  const cars = [
    {
      name: "BMW",
      des: "BMW is a German automobile manufacturer known for its luxury vehicles and sporty performance.",
    },
    {
      name: "Audi",
      des: "Audi is a German automaker that designs, engineers, produces, markets, and distributes luxury vehicles.",
    },
    {
      name: "Mercedes",
      des: "Mercedes-Benz is a global automobile marque and a division of the German company Daimler AG, known for luxury and innovation.",
    },
    {
      name: "Tesla",
      des: "Tesla is an American electric vehicle and clean energy company, famous for its innovative electric cars and advanced technology.",
    },
    {
      name: "Toyota",
      des: "Toyota is a Japanese automotive manufacturer renowned for its reliable and fuel-efficient cars.",
    },
    {
      name: "Honda",
      des: "Honda is a Japanese public multinational conglomerate manufacturer known for producing high-quality and efficient cars.",
    },
    {
      name: "Ford",
      des: "Ford is an American multinational automaker that has a long history of producing reliable and popular vehicles.",
    },
    {
      name: "Chevrolet",
      des: "Chevrolet, often referred to as Chevy, is an American automobile division of the American manufacturer General Motors (GM).",
    },
    {
      name: "Nissan",
      des: "Nissan is a Japanese automobile manufacturer known for its wide range of affordable and efficient vehicles.",
    },
    {
      name: "Volkswagen",
      des: "Volkswagen is a German automaker known for producing the iconic Beetle and a range of reliable and well-engineered cars.",
    },
  ];
  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1:
        return Car1;
      case 2:
        return Car2;
      case 3:
        return Car3;
      default:
        return Car1;
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {cars.map((car, index) => (
            <div className="col-md-3" key={index}>
              <Cards key={car.name} cars={car} carSrc={getRandomImage()} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
