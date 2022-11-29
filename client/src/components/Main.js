import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { BsBag } from "react-icons/bs";

const Main = () => {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12} className="d-flex justify-content-center align-items-center text">
          <p className="d-flex justify-content-center align-items-center text-center">
            FREE SHIPPING ON ALL U.S. ORDERS $49+
          </p>
        </Col>
      </Row>
      <div className="homep">
        <Row className="nv ">
          <Col md={4} className="d-flex ">
            <h5>Shop</h5>
            <h5>Our story</h5>
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center text-center">
            <h5>ESPRO</h5>
          </Col>
          <Col md={4} className="d-flex justify-content-end align-items-center text-center">
            <h5>Brew guides</h5>
            <h5>Blog</h5>
            <IoIosSearch className="icon" />
            <HiOutlineUser className="icon" />
            <BsBag className="icon" />
          </Col>
          {/* <Navbar collapseOnSelect expand="lg">
           <Navbar.Brand href="#pocetnaStrana">
                <img src={logo} style={{ width: "100px" }} />
              </Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#oNama">Shop</Nav.Link>

              <Nav.Link href="#galerija">Our story</Nav.Link>
            </Nav>
            <h2>espro</h2>
            <Nav>
              <Nav.Link href="#kontakt">Brew guides</Nav.Link>
              <Nav.Link href="/login">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        </Row>
        <Row
          className="d-flex justify-content-center align-items-center text-center"
          style={{ height: "80vh" }}>
          <Col md={6} className=" ">
            <h1>BREW ANYWHERE. BE ANYWHERE.</h1>
            <h4>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo.
            </h4>
            <Button>POUR ON THE GO</Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-end text-center">
          <Col md={3}>
            <h4>explore</h4>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Main;
