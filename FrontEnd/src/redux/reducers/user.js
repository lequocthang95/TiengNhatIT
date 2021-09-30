import { getUser, getType, } from '../action/user';
import { INIT_STATE } from '../action/actionTypes';

export default function User(state = INIT_STATE.User, action) {
  switch (action.type) {
    case getType(getUser.getUserRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getUser.getUserSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getUser.getUserFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
        return state;
    }
}