import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import promise from 'redux-promise';
//create store
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

const reduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer, reduxDevtool)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
