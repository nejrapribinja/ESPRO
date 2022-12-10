import { Col, Row, Container } from "react-bootstrap";
import one from "../images/past logo.png";
import two from "../images/homegrounds logo.png";
import three from "../images/martha stewart logo.png";
import four from "../images/buzzfeed logo.png";
import five from "../images/fastcompany logo.png";

const Section5 = () => {
  return (
    <Container fluid style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className="section5">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={8}>
          <div>
            <p className="t9">In the press</p>
            <p className="t10">
              “The result is a richly flavored, super aromatic cup of coffee without the usual silt
              in the bottom. The press isn’t just for coffee, either—there’s also a tea filter
              available that
              <br /> isolates tea leaves to prevent oversteeping.”
            </p>
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around align-items-center text-center">
        <Col>
          <img src={one} />
        </Col>
        <Col>
          <img src={two} />
        </Col>
        <Col>
          <img src={three} />
        </Col>
        <Col>
          <img src={four} />
        </Col>
        <Col>
          <img src={five} />
        </Col>
      </Row>
    </Container>
  );
};

export default Section5;
