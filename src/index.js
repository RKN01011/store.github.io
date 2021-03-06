import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './index.css';
import "./ttt/oswald.css";
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";

const store = createStore(combineReducers(reducers), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><Router/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
