import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import five from "../images/5.png";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={five} />
      <Card.Body>
        <AiFillStar />
        <AiFillStar />
        <Card.Title>Card Title</Card.Title>
        <Card.Text>$143</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
