import { Button, Card, Col } from "react-bootstrap";

const Post = (props) => {
  return (
    <Card className="text-center" style={{ width: "28rem", color: "black" }}>
      <Card.Header>{props.post.title}</Card.Header>
      <Card.Body>
        <Card.Link className="card-link">{props.post.description}</Card.Link>
      </Card.Body>
      <Card.Footer className="d-flex text-muted">
        <Col className="text-start">{props.post.dat}</Col>
        <Col className="text-end">
          Author: {props.post.first_name} {props.post.last_name}
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default Post;
