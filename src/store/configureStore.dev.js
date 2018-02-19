import {createStore,compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStoreDev (initialState)
{
  const middlewares = [
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.
        reduxImmutableStateInvariant(),
        thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  const store = createStore(rootReducer,
                            initialState,
                            composeEnhancers(applyMiddleware(...middlewares)));
  return store;
}

function configureStoreProd(initialState) {
  const middlewares = [thunk];

  return createStore(rootReducer,
                     initialState,
                    compose(applyMiddleware(...middlewares)));
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;


export default configureStore;
