import React from "react";
import Navbar from "../components/Navbar";
import netflixMovies from "../components/data/movies";
import "./HomePage.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import ShowHide from "../components/ShowHide";

const HomePage = () => {
  return (
    <div>
      <h1 className="home-page">HOME PAGE</h1>
      <Navbar />

    <div className="movie-list">
      {netflixMovies.map((item) => {
        return (
          <Link to={`/details/${item.id}`}>
            <Card key={item.id} items={item} />
          </Link>
        );
      })}
      </div>
      <ShowHide/>
    </div>
  );
};

export default HomePage;
