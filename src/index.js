import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
// import Login from './view/Login';
// import Home from './view/Home';
import Category from './view/Category';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Category />, document.getElementById('Home'));
// ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
