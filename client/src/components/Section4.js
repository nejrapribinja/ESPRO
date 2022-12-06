import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Carousel, Button } from "react-bootstrap";
import one from "../images/8.png";
import two from "../images/19.png";
import three from "../images/20.png";

const Section4 = () => {
  return (
    <Container fluid style={{}}>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={6} className="d-flex justify-content-center align-items-center sc4-left">
          <div>
            <p className="t3">Make every cup an experience.</p>
            <p className="t4">
              Have your French pressed coffee anywhere with ESPRO’s Travel Press. A<br /> double
              micro-filter eliminates grit for your smoothest cup on the go, and the <br />
              mug fits right in a car cup holder or bike’s water bottle cage.
            </p>
            <Button className="btn1" style={{ margin: "2rem" }}>
              Shop travel press
            </Button>
          </div>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-end text-center sc4-right">
          <div>
            <Carousel variant="dark">
              <Carousel.Item interval={800}>
                <img src={one} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img src={two} width="440" height="440" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={800}>
                <img src={three} width="440" height="440" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
            <p className="t8 ">Press. sip. enjoy.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section4;
