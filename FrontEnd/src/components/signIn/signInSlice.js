import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signIn = createAsyncThunk(
  'users/signIn',
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios({
        method: "post",
        url: 'http://127.0.0.1:8000/api/login',
        data: dataUser,
        headers: { "Content-Type": "application/json" },
      })
      if (response.data.success === true) {
        localStorage.setItem('accessToken', response.data.token)
        localStorage.setItem('isLogin', true)
        alert('Đăng nhập thành công!')
        window.location.reload();
      }
      if (response.data.success === false) {
        alert('Thông tin đăng nhập không hợp lệ!')
      }
      if (response.data.error) {
        alert('Thông tin đăng nhập không hợp lệ!')
      }
    }
    catch (error) {
      console.log(error);
    }
  })

export default createSlice({
    name: 'signInReducer',
    initialState: {
      isLoggedIn: false,
      user: {}
    },
    extraReducers: {
      [signIn.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [signIn.rejected]: (state, action) => {
        state.isLoggedIn = false;
      },
    },
  });



