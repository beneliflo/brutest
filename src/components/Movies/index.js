import React from "react";

import Movie from "../Movie";
import MoviesStyled from './styles'

const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <Movie key={i} item={m} />);
  }

  return (
    <MoviesStyled>
      {cards}
    </MoviesStyled>
  );
};

export default Movies;
