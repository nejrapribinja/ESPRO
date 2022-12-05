import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button, Form, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navbar";

const EditPost = () => {
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await fetch("/getPosts");
      const jsonData = await response.json();

      setPosts(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navigation />
      <Container fluid className="postuser">
        <Nav justify variant="tabs" defaultActiveKey="link-2">
          <Nav.Item>
            <Nav.Link href="/allPosts">All posts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" href="/addPost">
              Add post
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" href="/editPost">
              Edit post
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="d-flex justify-content-center align-items-center text-center ">
          <Col md={4}>
            <p className="t3">Add post</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md={6} className="d-flex justify-content-center align-items-center text-center">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditPost;
