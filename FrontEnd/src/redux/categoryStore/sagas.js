import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from './actions';
import Api from '../api';

function* showCategories(action) {
  try {
    const Categories = yield call(Api.showCategoriesCategories);
    yield put(actions.getCategories.getCategoriesSuccess(Categories.data));
    console.log(Categories.data)
  } 
  catch (err) {
    console.error(err);
    yield put(actions.getCategories.getCategoriesFailure(err));
  }
}



function* CatagoriesSaga() {
  yield takeLatest(actions.getCategories.getCategoriesRequest, showCategories);
}

export default CatagoriesSaga;