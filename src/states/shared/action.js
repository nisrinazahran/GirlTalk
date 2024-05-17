import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { setAuthUserActionCreator } from '../authUser/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncRegisterUserAndThenLogin({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    let response;
    
    try {
      await api.register({ name, email, password });
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const user = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(user));

      response = { success: true };
    } catch (error) {
      alert(error.message);
      response = { success: false };
    }
    dispatch(hideLoading());
    return response;
  };
}

export { asyncPopulateUsersAndThreads, asyncRegisterUserAndThenLogin };
