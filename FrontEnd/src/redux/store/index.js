import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Reducers from '../reducers'
import RootSagas from '../sagas'


const sagaMiddleware = createSagaMiddleware()
const Store = createStore(
  Reducers,
  applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(RootSagas)
export default Store;