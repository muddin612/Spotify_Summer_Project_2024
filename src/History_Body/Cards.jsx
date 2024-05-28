import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Car from "../assets/car3.jpg";
import Styles from "./Cards.module.css";
export default function Cards({ cars, carSrc }) {
  return (
    <div className="d-flex flex-wrap justify-content-center h-100">
      <Card
        className={Styles.cardGlow}
        style={{ width: "18rem", margin: "10px" }}
      >
        <Card.Img variant="top" src={carSrc} />
        <Card.Body>
          <Card.Title>{cars.name}</Card.Title>
          <Card.Text>{cars.des}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
