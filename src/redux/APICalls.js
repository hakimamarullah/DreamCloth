import { loginFailure, loginStart, loginSuccess, logout} from './userRedux';
import {resetCart} from './cartRedux'
import { publicRequest } from '../axiosInstance';
import { registerFailure, registerStart, registerSuccess } from './registerRedux';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure({message: err.response.data.message}));
  }
};

export const signUp = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure({message: err.response.data.message}));
  }
};
export const signOut = (dispatch)=>{
  dispatch(logout())
  dispatch(resetCart())
}
