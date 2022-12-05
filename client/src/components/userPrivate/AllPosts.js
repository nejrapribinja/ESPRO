import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button, Nav, Navbar } from "react-bootstrap";
import Post from "../Post";
import Login from "../Login";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navbar";
import Navigation2 from "./Navbar";

const AllPosts = () => {
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
            <Nav.Link eventKey="link-2" href="/editPost">
              Edit post
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className="d-flex justify-content-center align-items-center text-center ">
          <Col md={4}>
            <p className="t3">Post</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col md={6} className="d-flex justify-content-center align-items-center text-center">
            {posts.map((post) => {
              return (
                <Col
                  md={6}
                  className="d-flex justify-content-center align-items-center text-center">
                  <Post post={post} />
                </Col>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllPosts;
