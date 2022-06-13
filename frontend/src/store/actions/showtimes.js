import {
  TOGGLE_DIALOG,
  SELECT_SHOWTIMES,
  SELECT_ALL_SHOWTIMES,
  GET_SHOWTIMES,
  DELETE_SHOWTIME
} from '../types';
import { setAlert } from './alert';

export const toggleDialog = () => ({ type: TOGGLE_DIALOG });

export const selectShowtime = showtime => ({
  type: SELECT_SHOWTIMES,
  payload: showtime
});

export const selectAllShowtimes = () => ({ type: SELECT_ALL_SHOWTIMES });

export const getShowtimes = () => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/showtimes';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const showtimes = await response.json();
    if (response.ok) {
      dispatch({ type: GET_SHOWTIMES, payload: showtimes });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const addShowtime = showtime => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/showtimes/';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(showtime)
    });
    if (response.ok) {
      dispatch(setAlert('Сеанс створено', 'success', 5000));
      return { status: 'success', message: 'Сеанс створено' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Сеанс не збережено, спробуйте ще раз.'
    };
  }
};

export const updateShowtime = (showtime, id) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/showtimes/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(showtime)
    });
    if (response.ok) {
      dispatch(setAlert('Сеанс оновлено', 'success', 5000));
      return { status: 'success', message: 'Сеанс оновлено' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Сеанс не збережено, спробуйте ще раз.'
    };
  }
};

export const deleteShowtime = id => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/showtimes/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      dispatch({ type: DELETE_SHOWTIME, payload: id });
      dispatch(setAlert('Сеанс видалено', 'success', 5000));
      dispatch(getShowtimes());
      return { status: 'success', message: 'Сеанс видалено' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Сеанс не видалено, спробуйте ще раз.'
    };
  }
};
