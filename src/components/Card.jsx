import React from "react";

const Card = ({ items }) => {
//   console.log("items description:", items.description);
  return (
    <article className="article-card">
      <img src={items.image} />
      <h3 className="movie-title">{items.title}</h3>
    </article>
  );
};

export default Card;
