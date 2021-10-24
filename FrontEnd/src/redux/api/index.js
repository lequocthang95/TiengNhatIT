import axios from 'axios'
export const URL='http://127.0.0.1:8000';

export const fetchCategories = () => axios.get(`${URL}/users`);
export const fetchLogIn = () => axios.get(`${URL}/api`);

export const fetchPosts = () => axios.get(`${URL}/users`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
