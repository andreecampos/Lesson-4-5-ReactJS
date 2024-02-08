import React from "react";
import { useParams, Link } from "react-router-dom";
import netflixMovies from "../components/data/movies";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { id } = useParams();
  
  const showDetails = netflixMovies.find((i) => i.id === id);
  if (!showDetails) {
    return <h1>Movies details not founnd</h1>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h2 className={styles.title}>{showDetails.title}</h2>
      <p className={styles.description}>{showDetails.description}</p>
      <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={showDetails.image}
        alt={showDetails.title}
      />

      </div>
      <Link className={styles.backLink} to="/">
        Back
      </Link>
    </div>
  );
};

export default MovieDetails;
