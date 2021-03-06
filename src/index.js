import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fontawesome-free-5.12.1-web/css/all.css';
import 'react-widgets/dist/css/react-widgets.css'
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducers/index'
import {Provider} from 'react-redux'

let store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  );

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
