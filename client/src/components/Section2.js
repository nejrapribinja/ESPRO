import { Col, Row, Container } from "react-bootstrap";
import one from "../images/21.png";
import two from "../images/22.png";
import three from "../images/23.png";
import four from "../images/24.png";
import five from "../images/25.png";
import six from "../images/26.png";

const Section2 = () => {
  return (
    <Container fluid style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className="section2">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col>
          <img src={five} />
        </Col>
        <Col md={4}>
          <p className="t5">Designed for real life</p>
          <p className="t6">
            COFFEE MADE FOR <br />
            YOUR LIFE ON THE GO.
          </p>
          <p>
            We understand coffee is a big part of your busy, active life. That’s why we create and
            develop products that allow you to bring your passion for coffee-when you want it- and
            wherever life takes you.
          </p>
        </Col>
        <Col>
          <img src={four} />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col>
          <img src={one} />
        </Col>
        <Col>
          <img src={two} />
        </Col>
        <Col>
          <img src={three} />
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
