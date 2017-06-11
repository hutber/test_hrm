import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux'
import store from './configureStore';
import Routes from './routes';
import './components/shared/main.css';
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes/>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
