import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Posts from "./Posts";

function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
