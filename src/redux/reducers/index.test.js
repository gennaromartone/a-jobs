import {jobsList as reducer} from './index'
import * as actions from './../actions';

describe('jobsList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        jobsListItem: []
      }
    )
  })

  it('should handle REQUEST_LIST', () => {
    expect(
      reducer({}, {
        type: actions.REQUEST_LIST,
        isFetching: true
      })
    ).toEqual(
      {
        isFetching: true
        
      }
    )

    expect(
        reducer([], {
            type: actions.RECEIVE_LIST,
            jobsListItem: [{list:"list"}]
          })
        ).toEqual(
      {
        isFetching: false,
        jobsListItem: [{list:"list"}]
      }
    )
  })
})