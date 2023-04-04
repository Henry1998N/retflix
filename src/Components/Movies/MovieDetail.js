import React, { useState } from "react";
import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import "./moviesDetail.css";
export default function MovieDetail({ movies }) {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id == movieId);
  return (
    <div className="movie-container">
      <div>
        <Card style={{ width: "500px" }}>
          <Card.Header>
            <b>Title : </b>
            {movie.title}
          </Card.Header>
          <Card.Img variant="bottom" height="400px" src={movie.img} />
          <Card.Body>
            <Card.Text>
              <b>Short Description :</b> {movie.descrShort}
            </Card.Text>
            <Card.Footer>
              <b>Published : </b> {movie.year}
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
