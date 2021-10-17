import * as api from '../api';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionsCategories from '../actions/categories';

function* showCategories(action) {
  try {
    const categories = yield call(api.fetchCategories);
    yield put(actionsCategories.getCategories.getCategoriesSuccess(categories.data));
  } 
  catch (err) {
    console.error(err);
    yield put(actionsCategories.getCategories.getCategoriesFailure(err));
  }
}


function* RootSagas() {
  yield takeLatest(actionsCategories.getCategories.getCategoriesRequest, showCategories);
}

export default RootSagas;