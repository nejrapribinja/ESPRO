import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import Post from "./Post";

const PostSection = () => {
  const [posts, setPosts] = useState([]);

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
    <Container fluid style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className="footer">
      <Row className="d-flex justify-content-center align-items-center text-center ">
        <Col md={4}>
          <p className="t3">Post</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={6} className="d-flex justify-content-center align-items-center text-center">
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default PostSection;
