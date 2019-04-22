import React, { Component } from 'react';
import axios from "axios";

import Movie from '../Movie'
import TopStyled from './styles'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'

class TopRated extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`${API_URL}?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => {
        const posts = res.data.results.map(obj => obj);
        // console.log(res.data.results[3].original_title);
        this.setState({ posts });
      });
  }

  render() {
    return (
      <TopStyled>
        <p className='title-list'>Top rated</p>

        <div className='content-list'>
          {this.state.posts.map((m, i) =>
            <Movie key={i} item={m} />
          )}
        </div>
      </TopStyled>
    );
  }
}

export default TopRated
