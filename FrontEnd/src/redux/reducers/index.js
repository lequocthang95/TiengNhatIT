import { combineReducers } from 'redux';
import Categories from './categories'
import Posts from './posts'
import Account from './account';

export default combineReducers({
  Categories, Posts, Account
});