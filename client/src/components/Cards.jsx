import React from "react";
import "./Cards.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Cards = (props) => {
  const { post } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{post.title}</ListGroup.Item>
        <ListGroup.Item>{post.body}</ListGroup.Item>
        <ListGroup.Item>Written by User {post.id}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Cards;
