import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import { BsFillPlayFill } from "react-icons/bs";

const Section6 = () => {
  return (
    <Container fluid style={{ paddingBottom: "4rem" }} className="section8">
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12}>
          <p className="t11">Fresh grounds. 01 Fresh </p>
        </Col>
      </Row>
      <Container>
        <Row className="d-flex justify-content-center align-items-center text-center s6">
          <Col md={6} className="d-flex justify-content-center align-items-center text-center">
            <div className="jumbotron-video-wrapper"></div>
            {/* <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/574425747?h=e180e54244"
              width="640"
              height="360"
              frameborder="0"
              allowfullscreen></iframe> */}
            <div>
              <p className="t12">
                Episode 01: <b>the great migration</b>
              </p>
              <p className="t13">Fresh grounds</p>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                <br /> sed diam nonumy eirmod tempor invidunt ut labore et.
              </p>
              <Button className="btn4 m-4 ">
                <BsFillPlayFill
                  className="me-2"
                  onClick={() => {
                    this.refs.video.play();
                  }}
                />{" "}
                Watch film
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section6;
