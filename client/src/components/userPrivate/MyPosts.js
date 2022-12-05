import React, { useState, useEffect } from "react";
import { Col, Row, Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navbar";
import EditPost from "./EditPost";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getUserPost();
  }, []);

  const getUserPost = async () => {
    try {
      const response = await fetch("/user/getUserPosts");
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
        <Row className="d-flex justify-content-center align-items-center text-center pt-5">
          <Col md={9} className="d-flex justify-content-center align-items-center text-center">
            <Table>
              <thead>
                <tr>
                  <th className="t5">My posts</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => {
                  return (
                    <tr key={post.id}>
                      <td></td>
                      <td>{post.title}</td>
                      <td>{post.dat}</td>
                      <td>{post.description}</td>
                      <td>
                        <Button className="btn2" onClick={() => setModalShow(true)}>
                          Edit
                        </Button>
                        <EditPost post={post} show={modalShow} onHide={() => setModalShow(false)} />
                      </td>
                      <td>
                        <Button className="btn2" onClick={() => setModalShow(true)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPosts;
