import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as type from '../types'
import {ORIGINAL_NETFLIX,
        RECOMENDADO_VOCE,
        EM_ALTA,
        ACAO,
        COMEDIA,
        TERROR,
        ROMANCE,
        DOCUMENTARIO} from '../constants/index'

import tmdb, {getHomeList} from '../../services/tmdb'

function getApi() {
  return tmdb.getHomeList();
}

function* fetchMovie() {
  try {
    const [original, recomendado, alta,acao,comedia,terror,romance,documentario] = yield all([
      call(getHomeList, ORIGINAL_NETFLIX), 
      call(getHomeList, RECOMENDADO_VOCE),
      call(getHomeList, EM_ALTA),
      call(getHomeList, ACAO),
      call(getHomeList, COMEDIA),
      call(getHomeList, TERROR),
      call(getHomeList, ROMANCE),
      call(getHomeList, DOCUMENTARIO)])
    //console.log(movies)
    yield put({ type: 'GET_MOVIES' , movies: [ 
      original.results, 
      recomendado.results, 
      alta.results,
      acao.results,
      comedia.results,
      terror.results,
      romance.results,
      documentario.results ]})
    
  } catch (error) {
    yield put({ type: 'GET_FAILED', message: error.message })
  }
}

function* watchMovieSaga() {
  yield takeEvery('GET_REQUEST', fetchMovie)
}

export default watchMovieSaga