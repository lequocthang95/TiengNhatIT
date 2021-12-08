import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts= createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});
export const createPost = createActions({
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload) => payload,
  createPostFailure: (err) => err,
});

