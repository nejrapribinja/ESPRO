import { Col, Row, Container } from "react-bootstrap";
import Product from "./Product";

const Section1 = () => {
  return (
    <Container fluid style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={4}>
          <p className="t5">Pour your best cup with</p>
          <p className="t6">our best sellers</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12} className="d-flex justify-content-center align-items-center text-center">
          <Product />
          <Product />
          <Product />
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Section1;
