import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import reducers from './reducers';

const configureStore = function (history, preloadedState = {}) {
  // Build the middleware for intercepting and dispatching navigation actions
  const middlewareHistory = routerMiddleware(history);
  
  const store = createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(createLogger(), middlewareHistory),
    )
  );
  
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;

      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
export default configureStore(history);
