
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
    name: 'categories',
    initialState: {
        list: [],
        search: '',
    },
    reducers: {
        showCategories: (state, action) => {
            state.list = action.payload;
        },
        searchCategoriesChange: (state, action) => {
            state.search = action.payload;
        }
    }
})