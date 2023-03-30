import React, { useState } from "react";
import SearchBar from "../Header/SearchBar";
import Movie from "../Movies/Movie";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Catalog.css";
import Budget from "../Budget";
export default function Catalog({ movies, rentMovie, budget }) {
  const [searchInput, setSearchInput] = useState("");
  const updateInputValue = function (newValue) {
    setSearchInput(newValue);
  };
  const getMoviesBySearch = function () {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  const getRentedMovies = function () {
    return movies.filter((movie) => movie.isRented);
  };
  const displaySearchResult = function () {
    let searchRresult = [];
    getMoviesBySearch().forEach((movie) => {
      searchRresult.push(
        <Col>
          <Movie movieInfo={movie} rentMovie={rentMovie} />
        </Col>
      );
    });
    return searchRresult;
  };
  const getUnRentedMovies = function () {
    return movies.filter((movie) => movie.isRented == false);
  };
  return (
    <div className="Container">
      <div>
        <SearchBar
          inputValue={searchInput}
          updateInputValue={updateInputValue}
        />
        <div className="budget">
          <Budget budget={budget} />
        </div>
      </div>

      {searchInput.length <= 0 ? (
        <Col>
          <Row>
            {getRentedMovies().length > 0 ? (
              <div className="rentedHeader">Rented : </div>
            ) : (
              <></>
            )}
            {getRentedMovies().map((movie) => (
              <Col>
                <Movie movieInfo={movie} rentMovie={rentMovie} />
              </Col>
            ))}
          </Row>
          <div className="catalogHeader">Catalog :</div>
          <Row>
            {getUnRentedMovies().map((movie) => (
              <Col>
                <Movie movieInfo={movie} rentMovie={rentMovie} />
              </Col>
            ))}
          </Row>
        </Col>
      ) : (
        <div>
          <Col>
            <Row>{displaySearchResult()}</Row>
          </Col>
        </div>
      )}
    </div>
  );
}
