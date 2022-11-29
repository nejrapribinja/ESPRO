import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import Product from "./Product";

const Offer = () => {
  return (
    <Container fluid style={{ marginTop: "3rem" }}>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={4}>
          <h5>POUR YOUR BEST CUP WITH</h5>
          <h2>OUR BEST SELLERS</h2>
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

export default Offer;
