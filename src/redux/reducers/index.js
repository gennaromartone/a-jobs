import { combineReducers } from 'redux';
import * as actionType from './../actions';

function selectJob(state = 'reactjs', action) {
    switch (action.type) {
      case actionType.SELECT_JOB:
        return action.subreddit
      default:
        return state
    }
  }
  
  export function jobsList(
    state = {
      isFetching: false,
      jobsListItem: []
    },
    action
  ) {
    switch (action.type) {
      
      case actionType.REQUEST_LIST:
        return Object.assign({}, state, {
          isFetching: true,
        })
      case actionType.RECEIVE_LIST:
        return Object.assign({}, state, {
          isFetching: false,
          jobsListItem: action.jobsListItem,
        })
      default:
        return state
    }
  }

export default combineReducers({
  selectJob,
  jobsList
})