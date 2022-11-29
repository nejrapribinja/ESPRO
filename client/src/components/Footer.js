import { Row, Col, Container, InputGroup, FormControl, Form } from "react-bootstrap";
import whiteLogo from "../images/white espro logo.png";

const Footer = () => {
  return (
    <Container fluid className="footer">
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
      <hr />
      <Row
        className="d-flex justify-content-center align-items-top text-center"
        style={{ paddingTop: "2rem" }}>
        <Col md={4}>
          <img src={whiteLogo} />
          <p>
            We’re here to help.
            <br /> service@espro.com <br />
            1.844.377.7622
          </p>
          <p style={{ padding: "4rem 0 2rem 0" }}>Copyright © 2021 Espro Inc.</p>
        </Col>
        <Col md={2} className="text-start">
          <h6>Learn</h6>
          <p>
            Blog
            <br /> Our Story
            <br /> Brew Guides
            <br /> Retailers
          </p>
        </Col>
        <Col md={2} className="text-start">
          <h6>Learn</h6>
          <p>
            Blog
            <br /> Our Story
            <br /> Brew Guides
            <br /> Retailers
          </p>
        </Col>
        <Col md={2} className="text-start">
          <h6>Learn</h6>
          <p>
            Blog
            <br /> Our Story
            <br /> Brew Guides
            <br /> Retailers
          </p>
        </Col>
        <Col md={2}>
          <h6>Connect with us</h6>
          <p style={{ padding: "4rem 0 2rem 0" }}>Terms & Privacy</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
