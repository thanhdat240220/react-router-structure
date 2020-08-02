import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
//create browser history
import history from './helpers/history';

import App from './components/App';
import Routes from './routes';

import authRequests from './requests/authRequest';
import { createStore } from 'redux';
//import AppReducers from './reducers';

//css
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Routes />
            </App>
        </Router>
    </Provider>
    , document.getElementById('container'));