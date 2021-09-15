import { all } from 'redux-saga/effects'

import watchMovieSaga from './movie'
import watchSearchSaga from './search'

export default function* rootSaga() {
  yield all([watchMovieSaga()])
}