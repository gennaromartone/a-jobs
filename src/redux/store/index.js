import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './../reducers';




// Applying middleware with Logger and Thunk for Async request
const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
  }

export const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)



// Grab the state from a global variable injected into the server-generated HTML
var preloadedState = {};
if (typeof window != 'undefined' && window.__PRELOADED_STATE__) {
    preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
}

const composeEnhancers = (typeof window != 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(logger, thunk)
));


export default store;