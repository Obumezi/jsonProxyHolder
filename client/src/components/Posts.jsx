import React, { useEffect, useState } from "react";
import "./Poststyle.css";
/* import Card from "react-bootstrap/Card"; */
import Cards from '../components/Cards'

const Posts = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    await fetch(`https://${window.location.hostname}:1338/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data.slice(0,5)));
    /*  .catch((err) => {
        console.log(err);
      }); */
  };

return (
    <div className="cardContainer">
      {posts.map(post => (
        <Cards key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
