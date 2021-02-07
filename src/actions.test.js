import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

import * as actions from './actions'
import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
} from "./constants";

const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to search robots', () => {
  const text = 'woo'
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }

  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

it('handles requestRobots', () => {
  const store = mockStore()
  store.dispatch(actions.requestRobots())
  const action = store.getActions()
  const expectedAction = {
    type: REQUEST_USERS_PENDING,
  }
  expect(action[0]).toEqual(expectedAction)
})