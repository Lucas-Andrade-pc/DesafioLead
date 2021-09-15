import { call, put, takeEvery, all } from 'redux-saga/effects'
import {searchMovies} from '../../services/tmdb'

function* fetchSearch(){
    try{
        const [filme] = all([call(searchMovies("Lucifer"))])
        console.log(filme)
        yield put({type: 'GET_SEARCH_SUCESS', search: filme.results  })
    }catch (error){
        yield put({ type: 'GET_SEARCH_FAILED', message: error.message })
    }
}

function* watchSearchSaga() {
    yield takeEvery('GET_SEARCH_REQUEST', fetchSearch)
}
  
  export default watchSearchSaga