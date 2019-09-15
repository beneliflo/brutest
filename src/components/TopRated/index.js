import React, { Component } from 'react';
import axios from "axios";

import Movie from '../Movie'
import TopStyled from './styles'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3/movie/top_rated'

class TopRated extends Component {
  state = {
    posts: [],
    pageNum: 2
  };

  componentDidMount(pageNum) {
    axios.get(`${API_URL}?api_key=${API_KEY}&language=en-US&page=${pageNum}`)
      .then(res => {
        const posts = res.data.results.map(obj => obj);
        this.setState({ posts, pageNum });
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
