import axios from 'axios';
import { GET_REQUESTS, ADD_REQUEST, DELETE_REQUEST, REQUEST_LOADING} from './types2';

export const getRequests = () => dispatch => {
  dispatch(setRequestsLoading());
  axios.get('/api/request').then(res =>
    dispatch({
      type: GET_REQUESTS,
      payload: res.data
    })
  );
};

export const addRequest = request => dispatch => {
  axios.post('/api/request', request).then(res =>
    dispatch({
      type: ADD_REQUEST,
      payload: res.data
    })
  );
};

export const deleteRequest = id => dispatch => {
  axios.delete(`/api/request/${id}`).then(res =>
    dispatch({
      type: DELETE_REQUEST,
      payload: id
    })
  );
};

export const setRequestsLoading = () => {
  return {
    type: REQUEST_LOADING
  };
};
