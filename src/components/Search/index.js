import React, { Component } from "react";

import { search } from "../../layouts/utils";
import Movies from '../Movies'
import TopRated from '../TopRated'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3/search/movie'

class Search extends Component {

  state = {
    movies: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `${API_URL}?api_key=${API_KEY}&language=en-US&query=${val}&page=1&include_adult=false`
    );
    const movies = results;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = <TopRated />;
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderMovies}
      </div>
    );
  }
}

export default Search
