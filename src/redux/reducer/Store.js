import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'; 

import AllReducers from './Combine';
import rootSaga from '../Saga';

const sagaMiddleware = createSagaMiddleware(rootSaga) 

const store = compose(applyMiddleware(sagaMiddleware))(createStore)(AllReducers)

sagaMiddleware.run(rootSaga)

export default store;