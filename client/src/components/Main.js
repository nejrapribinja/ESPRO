import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { BsBag } from "react-icons/bs";
import { BiUser, BiSearch } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";
import logo from "../images/ESPRO Logo.png";
import Login from "./Login";

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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Col className="d-flex">
                <Nav>
                  <Nav.Link href="#galerija">Shop</Nav.Link>
                  <Nav.Link href="#galerija">Our story</Nav.Link>
                </Nav>
              </Col>
              <Col className="text-center">
                <Navbar.Brand
                  href="#pocetnaStrana"
                  className="d-flex justify-content-center align-items-center">
                  <img src={logo} />
                </Navbar.Brand>
              </Col>
              <Col>
                <Nav className="d-flex justify-content-end align-items-center text-end">
                  <Nav.Link href="#kontakt">Brew guides</Nav.Link>
                  <Nav.Link href="/login">Blog</Nav.Link>
                  <BiSearch className="icon" />
                  <BiUser className="icon" onClick={() => setModalShow(true)} />
                  <BsBag className="icon" />
                </Nav>
              </Col>
            </Navbar.Collapse>
          </Container>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </Navbar>
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
