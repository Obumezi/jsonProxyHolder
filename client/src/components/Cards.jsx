import React from 'react';
import  './Cards.css'

const Card = (props) => {
  const { post } = props;

  return (
    <div className="card">
      <h2 className="card-title">{post.title}</h2>
      <div className="card-body">
        <p>{post.body}</p>
        <p>Written by User {post.id}</p>
      </div>
    </div>
  );
};

export default Card;
