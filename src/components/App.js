import React from 'react';
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'

const App = () => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column seven wide">
                    <MovieList />
                </div>
                <div className="column five wide">
                    <MovieDetail />
                </div>
            </div>
        </div>
    )
}

export default App;