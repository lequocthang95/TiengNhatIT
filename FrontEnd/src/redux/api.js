import axios from 'axios';

const URL='http://127.0.0.1:8000';
const token = localStorage.getItem('accessToken');

export const fetchSignIn = (userInfo) => axios.post({
    url: `${URL}/api/get_user`,
    data: userInfo,
    headers: {"Content-Type" : "application/json"},
  })
;