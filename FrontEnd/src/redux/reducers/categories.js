import { getCategories, getType, } from '../action/category';
import { INIT_STATE } from '../action/actionTypes';

export default function Categories(state = INIT_STATE.categoriesData, action) {
  switch (action.type) {
    case getType(getCategories.getCategoriesRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getCategories.getCategoriesSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getCategories.getCategoriesFailure):
      return {
        ...state,
        isLoading: false,
      };
    default:
        return state;
    }
}