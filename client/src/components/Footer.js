import { Row, Col, Container, InputGroup, FormControl, Form } from "react-bootstrap";
import whiteLogo from "../images/white espro logo.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row
          className="d-flex justify-content-start align-items-center "
          style={{ paddingTop: "2rem" }}>
          <Col md={5} className="justify-content-start align-items-center">
            <h1>NEVER MISS A DROP.</h1>
            <p>
              Sign up to be the first to know about exclusive new deals, product launches and more.
            </p>
          </Col>
          <Col md={7} className="text-end">
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
          <Col md={4} className="text-start">
            <img src={whiteLogo} />
            <p>
              We’re here to help.
              <br /> service@espro.com <br />
              1.844.377.7622
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
            <h6>SUPPORT</h6>
            <p>
              FAQ
              <br /> Shipping & Returns
              <br /> Our Guarantee
            </p>
          </Col>
          <Col md={2} className="text-start">
            <h6>COMPANY</h6>
            <p>
              Contact
              <br /> Join Us
              <br /> Press
            </p>
          </Col>
          <Col md={2} className="text-end">
            <h6>Connect with us</h6>
            <BsFacebook style={{ margin: "0.5rem" }} /> <BsInstagram style={{ margin: "0.5rem" }} />{" "}
            <BsTwitter style={{ margin: "0.5rem" }} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }}>
          <Col md={6} className="text-start">
            <p>Copyright © 2021 Espro Inc.</p>
          </Col>
          <Col md={6} className="text-end">
            <p>Terms & Privacy Patents</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
