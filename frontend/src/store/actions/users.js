import {
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  TOGGLE_USER_DIALOG,
  SELECT_USER,
  SELECT_ALL_USERS
} from '../types';

import { setAlert } from './alert';

export const toggleUserDialog = () => ({ type: TOGGLE_USER_DIALOG });

export const selectUser = user => ({
  type: SELECT_USER,
  payload: user
});

export const selectAllUsers = () => ({ type: SELECT_ALL_USERS });

export const getUsers = () => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/users';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const users = await response.json();
    if (response.ok) {
      dispatch({ type: GET_USERS, payload: users });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const addUser = user => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/users/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    const newUser = data.user;
    if (response.ok) {
      dispatch(setAlert('Користувача створено', 'success', 5000));
      dispatch({ type: ADD_USER, payload: newUser });
      return { status: 'success', message: 'Користувача створено' };
    } else {
      throw new Error(data._message);
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Користувача не створено, спробуйте ще раз.'
    };
  }
};

export const updateUser = (user, id) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/users/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    const newUser = data.user;
    if (response.ok) {
      dispatch(setAlert('Користувача оновлено', 'success', 5000));
      dispatch({ type: UPDATE_USER, payload: newUser });
      return { status: 'success', message: 'Користувача оновлено' };
    } else {
      throw new Error(data._message);
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Користувача не оновлено, спробуйте ще раз.'
    };
  }
};

export const deleteUser = id => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/users/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(setAlert('Користувача видалено', 'success', 5000));
      dispatch({ type: DELETE_USER, payload: id });
      return { status: 'success', message: 'Користувача видалено' };
    } else {
      throw new Error(data._message);
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Користувача не видалено, спробуйте ще раз.'
    };
  }
};
