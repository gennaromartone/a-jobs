import {getData} from './../../data/data';

export const REQUEST_LIST = 'REQUEST_LIST';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const SELECT_JOB = 'SELECT_JOB';

function requestJobsList() {
    return {
      type: REQUEST_LIST
    }
  }
  
  function receiveJobsList(jobsListItem) {
    return {
      type: RECEIVE_LIST,
      jobsListItem
    }
  }

  function requestFailure(action) {
    return {
      type: REQUEST_LIST,
      action
    }
  }
  
 export function fetchJobsList() {

    return dispatch => {
      dispatch(requestJobsList())

        return getData()
        .then(  response => {
            return response
            },
                error => console.log('An error occurred.', error)// TO DO --> dispatch requestFailure 
        )
        .then(jobsListItem => dispatch(receiveJobsList(jobsListItem)))
        
    }
  }

  function shouldFetchJobsList(state) {
    const list = state.jobsList.jobsListItem;
    if (list.length === 0) {
      return true
    } 
    return false;
  }
  
  export function fetchJobsListIfNeeded() {
    return (dispatch, getState) => {
      if (shouldFetchJobsList(getState())) {
        return dispatch(fetchJobsList())
      }
    }
  }