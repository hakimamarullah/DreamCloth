import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTg2Njk4ZGVlZjJiODM3ODI3NjBjMyIsImlzQWRtaW4iOnRydWUsInVzZXJuYW1lIjoibmlzZGFyZmF6aWxsYWxvY2FsIiwiaWF0IjoxNjU1MjkxMTgxLCJleHAiOjE2NTU0NjM5ODF9.LrzT63zaTmvjh-DOiizg8ZmGYiV07IhH2V9h5Z2dZ-c';

  export const publicRequest = axios.create({
    baseURL: BASE_URL
  })

  export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers: {authorization: `Bearer ${TOKEN}`}
  })