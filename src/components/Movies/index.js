import React from "react";

import Movie from "../Movie";

const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <Movie key={i} item={m} />);
  }

  return (
    <div>
      <div>{cards}</div>
    </div>
  );
};

export default Movies;
