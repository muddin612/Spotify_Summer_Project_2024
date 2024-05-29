import Image from "react-bootstrap/Image";
import { Carousel, Stack } from "react-bootstrap";
import { useState } from "react";
import Cards from "../History_Body/Cards";

import album1 from "../assets/album1.jpg";
import album2 from "../assets/album2.jpg";
import album3 from "../assets/album3.jpg";
import album4 from "../assets/album4.jpg";
import album5 from "../assets/album5.jpg";

export default function CarouselCard({ type }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const albums = [
    {
      title: "Thriller",
      artist: "Michael Jackson",
      des: "Thriller is a 1982 album by Michael Jackson, known for its groundbreaking music videos and chart-topping hits like 'Billie Jean' and 'Beat It'.",
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      des: "Back in Black is a 1980 album by AC/DC, celebrated for its hard rock sound and classic tracks like 'Hells Bells' and 'You Shook Me All Night Long'.",
    },
    {
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      des: "The Dark Side of the Moon is a 1973 album by Pink Floyd, renowned for its conceptual themes and innovative use of studio effects.",
    },
    {
      title: "Abbey Road",
      artist: "The Beatles",
      des: "Abbey Road is a 1969 album by The Beatles, famous for its iconic cover and enduring songs like 'Come Together' and 'Here Comes the Sun'.",
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      des: "Rumours is a 1977 album by Fleetwood Mac, known for its smooth rock sound and hits like 'Go Your Own Way' and 'Dreams'.",
    },
    {
      title: "Hotel California",
      artist: "Eagles",
      des: "Hotel California is a 1976 album by the Eagles, featuring the legendary title track and a mix of rock and country influences.",
    },
    {
      title: "21",
      artist: "Adele",
      des: "21 is a 2011 album by Adele, celebrated for its soulful ballads and chart-toppers like 'Rolling in the Deep' and 'Someone Like You'.",
    },
    {
      title: "Nevermind",
      artist: "Nirvana",
      des: "Nevermind is a 1991 album by Nirvana, credited with bringing grunge music to the mainstream with tracks like 'Smells Like Teen Spirit'.",
    },
    {
      title: "The Wall",
      artist: "Pink Floyd",
      des: "The Wall is a 1979 album by Pink Floyd, a rock opera that explores themes of isolation and society, featuring the hit 'Another Brick in the Wall'.",
    },
    {
      title: "Led Zeppelin IV",
      artist: "Led Zeppelin",
      des: "Led Zeppelin IV is a 1971 album by Led Zeppelin, known for its diverse musical styles and iconic tracks like 'Stairway to Heaven'.",
    },
  ];
  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    switch (randomNumber) {
      case 1:
        return album1;
      case 2:
        return album2;
      case 3:
        return album3;
      case 4:
        return album4;
      case 5:
        return album5;
      default:
        return album1;
    }
  };
  return (
    <>
      <h1 className="container text-center">Top 10: {type}</h1>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="mb-5 h-100"
      >
        {albums.map((carPic, index) => (
          <Carousel.Item key={index}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              {[...Array(3)].map((_, index) => {
                return (
                  <Cards cars={carPic} key={index} carSrc={getRandomImage()} />
                );
              })}
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
