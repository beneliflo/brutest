import React from 'react'

class Suggestions extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return <a href="/" key={this.props.movie.id}>
      <img alt="poster" width="120" src={this.props.movie.poster_src}/>
      <h3>{this.props.movie.title}</h3>
    </a>
  }
}

export default Suggestions
