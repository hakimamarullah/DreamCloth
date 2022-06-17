import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';


const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user)?.currentUser;
const accessToken = currentUser?.accessToken;

const TOKEN = accessToken;

  export const publicRequest = axios.create({
    baseURL: BASE_URL
  })

  export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: {authorization: `Bearer ${TOKEN}`}
  })