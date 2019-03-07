import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    render() {
        console.log("props >>>>>>>>>.", this.props);
        return <div>Movie List</div>
    }
}

const mapStateToProps = state => {
    return { movies: state.movies };
}

export default connect(mapStateToProps)(MovieList)