import React from "react";

import { truncStr } from "../../layouts/utils";
import MovieStyled from './styles'

const MovieCard = props => {
  const { title, poster_path, vote_average } = props.item;

  return (
    <MovieStyled href='/'>
      <img
        src={`${process.env.GATSBY_SITE_ASSETS_URL}${poster_path}`}
      />
      <span className='rate'>{vote_average}</span>
      <h3 className='title'>{truncStr(title, 10)}</h3>
    </MovieStyled>
  );
};

export default MovieCard;
