import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import five from "../images/5.png";

const Section2 = () => {
  return (
    <Container fluid style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="section2">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={4}>
          <p className="t5">Designed for real life</p>
          <p className="t6">
            COFFEE MADE FOR <br />
            YOUR LIFE ON THE GO.
          </p>
          <p>
            We understand coffee is a big part of your busy, active life. That’s why we create and
            develop products that allow you to bring your passion for coffee-when you want it- and
            wherever life takes you.
          </p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12} className="d-flex justify-content-center align-items-center text-center">
          <img src={five} />
        </Col>
      </Row>
    </Container>
  );
};

export default Section2;
