import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container } from "react-bootstrap";
import { BsBag } from "react-icons/bs";
import { BiUser, BiSearch } from "react-icons/bi";
import logo from "../images/ESPRO Logo.png";

const Navigation = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
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
            <Navbar.Brand href="/" className="d-flex justify-content-center align-items-center">
              <img src={logo} />
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="d-flex justify-content-end align-items-center text-end">
              <Nav.Link href="#kontakt">Brew guides</Nav.Link>
              <Nav.Link href="/login">Blog</Nav.Link>
              <BiSearch className="icon" />
              <BiUser className="icon" />
              <BsBag className="icon" />
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
