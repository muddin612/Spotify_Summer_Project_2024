import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function SearchBar() {
  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </>
  );
}
