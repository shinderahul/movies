import React from 'react'
import { connect } from 'react-redux'

const MovieDetail = ({ movie }) => {
    if (!movie) {
        return <div>Select a Movie</div>;
    }
        
    return (
        <div>
            <h3>Movie Details</h3>
            <p><b>Title:</b> {movie.title}</p>
            <img src={movie.img} alt=""/>
            <p><b>Duration:</b> {movie.duration} | <b>Genre:</b> {movie.genre}</p>
            <p><b>Description:</b> {movie.description}</p>
        </div>
  )
}

const mapStateToProps = state => {
    console.log(state)
    return { movie: state.selectedMovie }
}

export default connect(mapStateToProps)(MovieDetail)