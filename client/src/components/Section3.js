import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import Product from "./Product";

const Section3 = () => {
  return (
    <Container fluid style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="section3">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={5}>
          <p className="t6">Explore our products</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12} className="d-flex justify-content-center align-items-center text-center">
          <Product />
          <Product />
          <Product />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={5}>
          <Button className="btn1">Shop all products</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Section3;
