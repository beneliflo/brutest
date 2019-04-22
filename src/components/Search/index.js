import React, { Component } from 'react'
import Suggestions from '../Suggestions'
import $ from 'jquery'

const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/3/search/movie'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch("avengers")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = `${API_URL}?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results

        var movieSuggestions = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieSuggestion = <Suggestions key={movie.id} movie={movie}/>
          movieSuggestions.push(movieSuggestion)
        })

        this.setState({rows: movieSuggestions})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <form>
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}
      </form>
    )
  }
}

export default Search
