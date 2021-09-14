import { combineReducers } from 'redux'

import ReducerMovies from './ReducerMovies'
import { ReducerFonts } from './ReducerFonts'

const AllReducers = combineReducers({
    ReducerMovies,
    ReducerFonts
    
})

export default AllReducers;