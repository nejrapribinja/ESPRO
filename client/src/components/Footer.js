import { Row, Col, Container, InputGroup, FormControl, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row
        className="d-flex justify-content-center align-items-center text-center first"
        style={{ paddingTop: "2rem" }}>
        <Col md={4} className="justify-content-start align-items-center">
          <h1>NEVER MISS A DROP.</h1>
          <p>
            Sign up to be the first to know about exclusive new deals, product launches and more.
          </p>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Enter your email address" />
            <InputGroup.Text id="basic-addon2">Sign up</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center align-items-center text-center"
        style={{ paddingTop: "2rem" }}>
        <Col md={4} className="justify-content-start align-items-center">
          <h1>NEVER MISS A DROP.</h1>
          <p>
            Sign up to be the first to know about exclusive new deals, product launches and more.
          </p>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <Form.Control placeholder="Enter your email address" />
            <InputGroup.Text id="basic-addon2">Sign up</InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
