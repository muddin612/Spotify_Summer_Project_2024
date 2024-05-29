import CarouselCard from "./CarouselCard";
import style from "./carouselStyles.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CarouselBody() {
  return (
    <Container className={style.carouselPad}>
      <Row>
        <Col>
          <CarouselCard type={"Music"} key={"Music"} />
        </Col>
      </Row>
    </Container>
  );
}
