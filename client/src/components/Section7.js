import { Col, Row, Container, Button } from "react-bootstrap";
import ten from "../images/10.png";
import one from "../images/Group 6.png";

const Section7 = () => {
  return (
    <Container
      fluid
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      className="section7"
      id="content">
      <img src={one} id="c" />
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md={6} className="d-flex justify-content-start align-items-center text-start">
            <div>
              <p className="t5">The ultimate brew guides</p>
              <p className="t14">COFFEE TO WATER RATIOS: HOW TO MEASURE COFFEE LIKE A PRO</p>
              <p>
                <b>
                  You can taste it when you’ve brewed with the perfect coffee to water
                  <br /> ratio.
                </b>
                The acidity pops every so slightly, enhancing the rich flavors and
                <br /> aromas. Your coffee’s mouthfeel is smooth and satisfying. And the flavor
                <br /> is just strong enough that you can sense all its nuances across your
                <br /> 10,000 taste buds, but not so strong that it’s uncomfortable.
                <br />
                <br /> It’s an incredible experience—and too often, a hard one to come by.
              </p>
              <Button className="btn3 mt-4">Learn more</Button>
            </div>
          </Col>
          <Col md={6} className=" sc7">
            <img src={ten} width="620" height="450" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section7;
