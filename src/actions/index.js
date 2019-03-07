// Action Creator

export const selectMovie = movie => {
    // Return an action
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
};