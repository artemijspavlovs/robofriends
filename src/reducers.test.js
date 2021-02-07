import {
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
  REQUEST_USERS_FAILED,
} from "./constants";

import * as reducers from './reducers'
import * as actions from './actions'

describe('search robots', () => {
  const initialSearch = {
    searchField: ''
  }
  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
  })
  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialSearch, actions.setSearchField('abs')))
      .toEqual({ searchField: 'abs' })
  })
})

describe('request robots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  }
  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_USERS_PENDING', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_USERS_PENDING,
      payload: { isPending: true }
    })).toEqual({ robots: [], isPending: true, error: '', })
  })

  it('should handle REQUEST_USERS_SUCCESS', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_USERS_SUCCESS,
      payload: [
        { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" }
      ]
    })).toEqual({ robots: [
      { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" }
    ], isPending: false, error: '', })
  })

  it('should handle REQUEST_USERS_FAILED', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_USERS_FAILED,
      payload: 'something went wrong'
    })).toEqual({ robots: [], isPending: false, error: 'something went wrong', })
  })
})