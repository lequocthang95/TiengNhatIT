import axios from 'axios'
const token = localStorage.getItem('accessToken');
export const URL='http://127.0.0.1:8000';

export const getUser = () => axios({
    method: "get",
    url: `${URL}/api/get_user`,
    params: {"token":`${token}`},
    headers: {"Content-Type" : "application/json"},
  })
;
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
