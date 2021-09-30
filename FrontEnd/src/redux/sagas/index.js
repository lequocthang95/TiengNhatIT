import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../action/category';
import * as api from '../api';

function* showCategories(action) {
  try {
    const categories = yield call(api.fetchCategories);
    yield put(actions.getCategories.getCategoriesSuccess(categories.data));
  } 
  catch (err) {
    console.error(err);
    yield put(actions.getCategories.getCategoriesFailure(err));
  }
}

function* RootSagas() {
  yield takeLatest(actions.getCategories.getCategoriesRequest, showCategories);
}

export default RootSagas;