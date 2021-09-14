import * as type from '../types'

const INITIAL_STATE ={
    movies: [],
    loading: false,
    error: null
}

export default function ReducerMovies(state = INITIAL_STATE, action) {
    //console.log("####" ,action.movies)
    switch(action.type){
        case 'GET_REQUEST':
            return { ...state}
        case 'GET_MOVIES':
            return { ...state, loading: true, movies: action.movies}
        case 'GET_FAILE':
            return {...state, loading: false, error: action.message }
        default:
            return state;
    }
}