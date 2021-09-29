import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import CategoryReducers from './reducers'
import CategorySaga from './sagas'


const sagaMiddleware = createSagaMiddleware()
const CategoryStore = createStore(
  CategoryReducers,
  applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(CategorySaga)
export default CategoryStore;