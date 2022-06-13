import { GET_CINEMAS, GET_CINEMA } from '../types';
import { setAlert } from './alert';

export const uploadCinemaImage = (id, image) => async dispatch => {
  try {
    const data = new FormData();
    data.append('file', image);
    const url = '/cinemas/photo/' + id;
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });
    const responseData = await response.json();
    if (response.ok) {
      dispatch(setAlert('Зображення завантажено', 'success', 5000));
    }
    if (responseData.error) {
      dispatch(setAlert(responseData.error.message, 'error', 5000));
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const getCinemas = () => async dispatch => {
  try {
    const url = '/cinemas';
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const cinemas = await response.json();
    if (response.ok) {
      dispatch({ type: GET_CINEMAS, payload: cinemas });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const getCinema = id => async dispatch => {
  try {
    const url = '/cinemas/' + id;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const cinema = await response.json();
    if (response.ok) {
      dispatch({ type: GET_CINEMA, payload: cinema });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const createCinemas = (image, newCinema) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/cinemas';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCinema)
    });
    const cinema = await response.json();
    if (response.ok) {
      dispatch(setAlert('Зал створено', 'success', 5000));
      if (image) dispatch(uploadCinemaImage(cinema._id, image));
      dispatch(getCinemas());
      return { status: 'success', message: 'Зал створено' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: ' Зал не збережено, спробуйте ще раз.'
    };
  }
};

export const updateCinemas = (image, cinema, id) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/cinemas/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cinema)
    });
    if (response.ok) {
      dispatch(setAlert('Зал оновлено', 'Успіх', 5000));
      if (image) dispatch(uploadCinemaImage(id, image));
      return { status: 'success', message: 'Зал оновлено' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Зал не оновлено, спробуйте ще раз.'
    };
  }
};

export const removeCinemas = id => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/cinemas/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      dispatch(setAlert('Зал видалено', 'success', 5000));
      return { status: 'success', message: 'Зал видалено' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'Зал не видалено, спробуйте ще раз.'
    };
  }
};

export const getCinemasUserModeling = username => async dispatch => {
  try {
    const url = '/cinemas/usermodeling/' + username;
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const cinemas = await response.json();
    if (response.ok) {
      dispatch({ type: GET_CINEMAS, payload: cinemas });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};
