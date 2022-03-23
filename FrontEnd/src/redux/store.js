import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../components/categories/categoriesSlice';
import signInSlice from '../components/signIn/signInSlice';

const store = configureStore({
    reducer: {
        categories: categoriesSlice.reducer,
        signInReducer: signInSlice,
    }    
});
export default store;