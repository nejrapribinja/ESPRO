import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, NavDropdown, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/allPosts">
      <Nav.Item>
        <Nav.Link href="/allPosts">All posts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/addPost">
          Add post
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Edit post</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
