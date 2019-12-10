import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
<<<<<<< HEAD
// import App from './App';
// import Login from './view/Login';
// import Home from './view/Home';
// import Category from './view/Category';
import Categorypage from './view/Category-page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Categorypage />, document.getElementById('Home'));
// ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('login'));
=======
import App from './App';
import Login from './view/Login';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('login'));
>>>>>>> 433b4e33bdc0c78c5855969d840aa3c008bb69d5

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
