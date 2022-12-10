import { Col, Row, Container, Button } from "react-bootstrap";
import { GiCoffeeCup } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
import one from "../images/14.png";
import two from "../images/15.png";
import three from "../images/16.png";
import four from "../images/17.png";
import five from "../images/18.png";

const Section8 = () => {
  return (
    <Container fluid style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="section8">
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md={6} className="text-start">
            <p className="t7">SHOW US YOUR BEST POUR.</p>
            <p>
              Making coffee better — one cup at a time. <br />
              Share your best <GiCoffeeCup /> moments with us <b>#ESPRO</b>
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <Button className="btn3 d-flex align-items-center text-center">
              <BsInstagram style={{ margin: "0.4rem", fontSize: "16px" }} /> Follow us on instagram
            </Button>
          </Col>
        </Row>
      </Container>
      <Row className="d-flex justify-content-center align-items-center text-center mt-4">
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

export default Section8;
