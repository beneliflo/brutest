import React, { Component } from 'react';

import MovieStyled from './styles'

import BackIcon from './back_icon.js';

class MovieCard extends Component {

  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { title, poster_path, vote_average, release_date, overview } = this.props.item;

    return (
      <MovieStyled>
        <div className='movie-content' onClick={this.togglePopup.bind(this)}>
          <img
            className='movie-img'
            src={`${process.env.GATSBY_SITE_ASSETS_URL}${poster_path}`}
            alt='movie'
          />
          <span className='rate'>{vote_average}</span>
          <h3 className='title'>{title}</h3>
        </div>

        {this.state.showPopup ?
          <Popup
            bg={`${process.env.GATSBY_SITE_ASSETS_ORIGINAL_URL}${poster_path}`}
            image={`${process.env.GATSBY_SITE_ASSETS_URL}${poster_path}`}
            title={title}
            year={release_date}
            description={overview}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </MovieStyled>
    );
  }
};

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup-inner'>
          <div className='popup-bgimage' style={{ backgroundImage: `url(${this.props.bg})` }}></div>
          <div className='popup-data'>
            <img
              className='popup-img'
              src={this.props.image}
              alt='movie'
            />
            <h2 className='popup-title'>{this.props.title}</h2>
            <span className='popup-year'>{this.props.year.substring(0,4)}</span>
            <h4>Overview</h4>
            <p className='popup-description'>{this.props.description}</p>
          </div>
          <button onClick={this.props.closePopup}><BackIcon /></button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
