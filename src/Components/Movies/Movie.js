import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Movie({ movieInfo, rentMovie }) {
  const rentMovieById = function () {
    rentMovie(movieInfo.id);
  };
  const getIcon = function () {
    if (movieInfo.isRented) {
      return (
        <i
          style={{ fontSize: "40px", color: "white" }}
          onClick={rentMovieById}
          class="bi bi-dash-square-dotted"
        ></i>
      );
    }
    return (
      <i
        style={{ fontSize: "40px", color: "white" }}
        onClick={rentMovieById}
        class="bi bi-bookmark-plus"
      ></i>
    );
  };
  return (
    <div>
      <Card style={{ width: "300px", height: "230px", margin: "10px" }}>
        <Link to={`/movie/${movieInfo.id}`}>
          <Card.Header>{movieInfo.title}</Card.Header>
          <Card.Img variant="bottom" height="230px" src={movieInfo.img} />
        </Link>
        {getIcon()}
      </Card>
    </div>
  );
}
