import React, { Component } from "react";

import { search } from "../../layouts/utils";
import Movies from '../Movies'
import TopRated from '../TopRated'

import SearchStyled from './styles'

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
      `${API_URL}?api_key=${API_KEY}&language=en-US&query=${val}&include_adult=false&page=1`
    );
    const movies = results;

    console.log(movies)

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
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
      <SearchStyled>
        <div className='search-bar'>
          <span className='search-logo'>
            <span className='search-circle'></span>
            <span className='search-rect'></span>
          </span>
          <input
            type='search'
            value={this.state.value}
            onChange={e => this.onChangeHandler(e)}
            placeholder="Movie search"
          />
        </div>

        {this.renderMovies}
      </SearchStyled>
    );
  }
}

export default Search
