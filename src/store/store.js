import { applyMiddleware, compose, createStore } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggeerMiddleware = (store) => (next) => (action) =>{
  if(!action.type){
    return next(action);
  }
  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentstate:', store.getState());
  next(action);

  console.log('nextstate' , store.getState());
}

const middleWares = [process.env.NODE_ENV === 'development' && loggeerMiddleware].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);