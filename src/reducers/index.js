import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        { title: 'The Guilty', img: "https://m.media-amazon.com/images/M/MV5BMTk4MjEzYjctZmY2MS00ZDgyLWFkNDUtOTIyNDkwZjRlY2ZjXkEyXkFqcGdeQXVyODAzODU1NDQ@._V1_UY209_CR0,0,140,209_AL_.jpg", duration: '85 min', genre: 'Crime, Drama, Thriller', description: 'A police officer assigned alarm dispatch duty enters a race against time when he answers an emergency call from a kidnapped woman.' },
        { title: 'Mission: Impossible - Fallout', img: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_UX140_CR0,0,140,209_AL_.jpg", duration: '147 min', genre: 'Action, Adventure, Thriller', description: 'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.' },
        { title: 'Searching', img: "https://m.media-amazon.com/images/M/MV5BMjIwOTA3NDI3MF5BMl5BanBnXkFtZTgwNzIzMzA5NTM@._V1_UY209_CR0,0,140,209_AL_.jpg", duration: '102 min', genre: 'Drama, Mystery, Thriller', description: 'After his 16-year-old daughter goes missing, a desperate father breaks into her laptop to look for clues to find her.' },
        { title: 'A Star Is Born', img: "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg", duration: '136 min', genre: 'Drama, Music, Romance', description: 'A musician helps a young singer find fame, even as age and alcoholism send his own career into a downward spiral.' },
        { title: 'Spider-Man: Into the Spider-Verse', img: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_UY209_CR0,0,140,209_AL_.jpg", duration: '117 min', genre: 'Animation, Action, Adventure', description: 'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.' },
        { title: 'Blindspotting', img: "https://m.media-amazon.com/images/M/MV5BNjgwYTQ4YmEtOTcwYy00NjBlLWI0ZjYtNDM0YmI1OGM0MWY0XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UY209_CR0,0,140,209_AL_.jpg", duration: '95 min', genre: 'Comedy, Crime, Drama', description: 'While on probation, a man begins to re-evaluate his relationship with his volatile best friend.' },
        { title: 'You Were Never Really Here', img: "https://m.media-amazon.com/images/M/MV5BMDkwOTE0ZjMtZmRiYS00M2M3LWE3MzUtNzNmNmExNTNmNjg5XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_UY209_CR0,0,140,209_AL_.jpg", duration: '89 min', genre: 'Crime, Drama, Mystery', description: 'A traumatized veteran, unafraid of violence, tracks down missing girls for a living. When a job spins out of control, Joe\'s nightmares overtake him as a conspiracy is uncovered leading to what may be his death trip or his awakening.' },
        { title: 'A Quiet Place', img: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_UY209_CR0,0,140,209_AL_.jpg", duration: '90 min', genre: 'Drama, Horror, Mystery', description: 'https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_UY209_CR0,0,140,209_AL_.jpg' },
        { title: 'The Miseducation of Cameron Post', img: "https://m.media-amazon.com/images/M/MV5BNGI5ZDlkN2EtNTY5NC00ZDdjLTkzODktNzkwOGMwODcxZTI4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX140_CR0,0,140,209_AL_.jpg", duration: '91 min', genre: 'Drama', description: 'In 1993, a teenage girl is forced into a gay conversion therapy center by her conservative guardians.' },
        { title: 'Eighth Grade', img: "https://m.media-amazon.com/images/M/MV5BMzVlYzgxYjAtYzhhZi00MDc1LTlkZDMtMTRhZWI0MTg5YTRjXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX140_CR0,0,140,209_AL_.jpg", duration: '93 min', genre: 'Comedy, Drama', description: 'An introverted teenage girl tries to survive the last week of her disastrous eighth grade year before leaving to start high school.' },
    ]
}

const selectedMovieReducer = (selectMovie = null, action) => {
    if (action.type === 'MOVIE_SELECTED') {
        return action.payload
    }

    return selectMovie
};

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
});