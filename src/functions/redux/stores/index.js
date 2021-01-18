import { createStore, applyMiddleware, compose,  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from '../states';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result;
}

const round = number => Math.round(number * 100) / 100

const monitorReducersEnhancer = createStore => (
  reducer,
  enhancer
) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = round(end - start)

    console.log('reducer process time:', diff)

    return newState
  }

  return createStore(monitoredReducer, enhancer)
}

const configureStore = (preloadedState) => {
    const middlewares = [thunk,logger];
    const middlewareObject = applyMiddleware(...middlewares);
    const enhancers = [middlewareObject, monitorReducersEnhancer];
    const composedEnhancers = compose(...enhancers)
    const store = createStore(
        rootReducer,
        composedEnhancers
    );
    return store;
}

const store = configureStore();

export { store };