import { all } from 'redux-saga/effects'

import watchMovieSaga from './movie'

export default function* rootSaga() {
  yield all([watchMovieSaga()])
}