import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import './styles/main.scss';
import allReducers from './store/reducers';
import ReduxPromise from 'redux-promise';
import 'babel-polyfill';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(allReducers)}><App /></Provider>, document.getElementById('app'));
