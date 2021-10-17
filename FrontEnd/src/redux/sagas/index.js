import * as api from '../api';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionsCategories from '../actions/categories';
import * as actionsAccount from '../actions/account';

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


function* accountCreate(action) {
  try {
    const categories = yield call(api.createAccount,action.payload);
    yield put(actionsAccount.createAccount.createAccountSuccess(categories.data));
  } 
  catch (err) {
    console.error(err);
    yield put(actionsAccount.createAccount.createAccountFailure(err));
  }
}


function* RootSagas() {
  yield takeLatest(actionsCategories.getCategories.getCategoriesRequest, showCategories);
  yield takeLatest(actionsAccount.createAccount.createAccountRequest, accountCreate);
}

export default RootSagas;