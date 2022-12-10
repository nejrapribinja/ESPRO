import { Col, Row, Container, Button } from "react-bootstrap";

const Section3 = () => {
  return (
    <Container fluid style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className="section3">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={5}>
          <p className="t6">Explore our products</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-evenly align-items-center text-center">
        <Col md={3} className="text-start sc31 t15">
          <p>French press</p>
        </Col>
        <Col md={3} className="text-start sc32 t15">
          <p>Pour over</p>
        </Col>
        <Col md={3} className="text-start sc33 t15">
          <p>Cold brew</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={5}>
          <Button className="btn1 mt-4">Shop all products</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
