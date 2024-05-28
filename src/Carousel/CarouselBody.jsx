import CarouselCard from "./CarouselCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CarouselBody() {
  return (
    <Container>
      <Row>
        <Col>
          <CarouselCard type={"Music"} key={"Music"} />
        </Col>
        <Col>
          <CarouselCard type={"Podcast"} key={"Podcast"} />
        </Col>
      </Row>
    </Container>
  );
}
