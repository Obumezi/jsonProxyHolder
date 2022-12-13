import React, { useEffect, useState } from "react";
import "./Poststyle.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Posts = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    await fetch(`https://${window.location.hostname}:1338/posts/2`)
      .then((res) => res.json())
      .then((data) => setPost(data));
    /*  .catch((err) => {
        console.log(err);
      }); */
  };

  return (
    <Card className="fix" style={{ width: "18rem" }}>
      <>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item> {posts.title}</ListGroup.Item>
          <ListGroup.Item>{posts.body}</ListGroup.Item>
        </ListGroup>
      </>
    </Card>
  );
};

export default Posts;
