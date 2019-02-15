import configureMockStore from 'redux-mock-store'
import {thunk} from './../store';
import * as actions from './index';
import {getData} from './../../data/data';
import expect from 'expect';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {


  it('creates RECEIVE_LIST when fetchJobsList() has been done', () => {
// is not possible to mock a call
    const expectedActions = [
      { type: actions.REQUEST_LIST },
      { type: actions.RECEIVE_LIST, jobsListItem:  [{"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 1, "title": "Frontend Developer"}, {"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 2, "title": "Frontend Developer 2"}, {"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 3, "title": "Frontend Developer 3"}, {"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 4, "title": "Frontend Developer 4"}, {"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 5, "title": "Frontend Developer 5"}, {"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 6, "title": "Frontend Developer 6"}, {"description": "Comfortable with modern JS stack, experience with React.", "employment_type": "full_time", "id": 7, "title": "Frontend Developer 7"}] } 
    ]
    const store = mockStore({ jobsListItem: [{jobItem:'jobItem'}]  })

    return store.dispatch(actions.fetchJobsList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})