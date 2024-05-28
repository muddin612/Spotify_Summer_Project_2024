import { Container, Row, Col, Button } from "react-bootstrap";
export default function NoPage() {
  return (
    <Container
      className="text-center text-white col-md-12"
      style={{ marginTop: "50px" }}
    >
      <Row>
        <Col>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            The page you are looking for doesn't exist or an error occurred.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
