import React, { useEffect } from "react";
import "./Details.css";

class Detail extends React.Component {
  // 2. componentDidMount 됨
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  // 1. 먼저 render 되고
  render() {
    const { location } = this.props;
    if (location.state) {
      const movie = location.state;
      return (
        <div className="movie_detail">
          <img src={movie.poster} alt={movie.title} title={movie.title} />
          <div className="movie__data">
            <h3 className="movie__title">{movie.title}</h3>
            <h5 className="movie__year">{movie.year}</h5>
            <ul className="movie__genres">
              {movie.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{movie.summary}...</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
