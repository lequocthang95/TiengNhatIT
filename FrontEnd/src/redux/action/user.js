import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const loginPost = createActions({
  loginRequest: undefined,
  loginSuccess: (payload) => payload,
  loginFailure: (err) => err,
});

