import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navigation from "./Navbar";

const Main = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12} className="d-flex justify-content-center align-items-center text">
          <p style={{ padding: "0.5rem" }}>FREE SHIPPING ON ALL U.S. ORDERS $49+</p>
        </Col>
      </Row>
      <div className="homep">
        <Navigation />
        <Row
          className="d-flex justify-content-center align-items-center text-center"
          style={{ height: "80vh" }}>
          <Col md={7}>
            <h1 className="hd1">Brew anywhere. Be anywhere.</h1>
            <p className="t1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut
              <br /> labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo.
            </p>
            <Button className="btn1">Pour on the go</Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md={3} className="d-flex justify-content-center align-items-center t2">
            <p>explore</p>
            <AiOutlineArrowDown style={{ color: "white", fontSize: "18px" }} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Main;
