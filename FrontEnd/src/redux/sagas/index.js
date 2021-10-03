import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionsCategories from '../action/category';
import * as actionsPosts from '../action/posts';
import * as api from '../api';

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

function* createPost(action) {
  try {
    const postCreated = yield call(api.createPost, action.payload);
    yield put(actionsPosts.createPost.createPostSuccess(postCreated.data));
    console.log(postCreated)
  } catch (err) {
    console.error(err);
    yield put(actionsPosts.createPost.createPostFailure(err));
  }
}

function* showPosts(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actionsPosts.getPosts.getPostsSuccess(posts.data));
  } 
  catch (err) {
    console.error(err);
    yield put(actionsPosts.getPosts.getPostsFailure(err));
  }
}
function* RootSagas() {
  yield takeLatest(actionsCategories.getCategories.getCategoriesRequest, showCategories);
  yield takeLatest(actionsPosts.getPosts.getPostsRequest, showPosts);
  yield takeLatest(actionsPosts.createPost.createPostRequest, createPost);
}

export default RootSagas;