import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
} from "./constants";

import {apiCall} from './api/api'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_USERS_PENDING})
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({type: REQUEST_USERS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_USERS_FAILED, payload: error}))
}