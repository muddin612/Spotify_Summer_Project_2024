import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Styles from "./Cards.module.css";
export default function Cards({ cars, carSrc }) {
  return (
    <div className="d-flex flex-wrap justify-content-center h-100">
      <Card
        className={Styles.cardGlow}
        style={{ width: "20rem", margin: "10px" }}
      >
        <Card.Img
          variant="top"
          src={carSrc}
          style={{ width: "50%", height: "50%" }}
          className="mx-auto d-block"
        />
        <Card.Body>
          <Card.Title>Title: {cars.title}</Card.Title>
          <Card.Title>Artist: {cars.artist}</Card.Title>
          <Card.Text>{cars.des}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
