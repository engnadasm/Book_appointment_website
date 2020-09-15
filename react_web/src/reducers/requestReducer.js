import {
  GET_REQUESTS,
  ADD_REQUEST,
  DELETE_REQUEST,
  REQUEST_LOADING
} from '../actions/types2';
import {v1 as uuid} from "uuid";

const initialState = {
  requests: [
    { id: uuid(),firstName: 'nada',
    lastName: 'req.body.lastName',
    workEmail: 'eng.nada.s.m@gmail.com',
    phoneNumber: '012051112',
    country: ["counter"],
    company: ["counter"],
    objective: ["counter"],
    details: 'dcsjjkm,' }
  ],
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        loading: false
      };
    case DELETE_REQUEST:
      return {
        ...state,
        requests: state.requests.filter(request => request._id !== action.payload)
      };
    case ADD_REQUEST:
      return {
        ...state,
        requests: [action.payload, ...state.requests]
      };
    case REQUEST_LOADING:
     return {
       ...state,
       loading: true
     };
    default:
      return state;
  }
}
