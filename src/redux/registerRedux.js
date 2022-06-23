import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isFetching: false,
    error: false,
    message: null,
  },
  reducers: {
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.message = action.payload.message;
    },
    register: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
      state.message = null;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure, register } =
  registerSlice.actions;
export default registerSlice.reducer;
