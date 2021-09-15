import * as type from '../types'

const INITIAL_STATE ={
    movies: [],
    searchMovies: [],
    loading: false,
    error: null
}

export default function ReducerMovies(state = INITIAL_STATE, action) {
    console.log("####" ,state.searchMovies)
    switch(action.type){
        case 'GET_REQUEST':
            return { ...state}
        case 'GET_MOVIES':
            return { ...state, loading: true, movies: action.movies}
        case 'GET_FAILE':
            return {...state, loading: false, error: action.message }
        case 'GET_SEARCH_REQUEST':
            return { ...state.searchMovies,loading:false}
        case 'GET_SEARCH_SUCESS':
            return {...state.searchMovies, loading: true, searchMovies: action.search}
        default:
            return state;
    }
}