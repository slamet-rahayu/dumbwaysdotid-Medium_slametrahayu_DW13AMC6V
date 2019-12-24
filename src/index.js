import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Login from './view/Login';
import Home from './view/Home';
// import Category from './view/Category';
import Onezero from './view/Category-page';
import Article from './view/Article';
import Follow from './view/follow';
import Comments from './view/Comment';
import Popover from './view/Popover';
import Newstory from './view/New-story';
import Stories from './view/Stories';
import Profile from './view/Profile';
import Personal from './view/Personalarticle';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Stats from './view/stats';
import Bookmark from './view/Bookmark';
import 'font-awesome/css/font-awesome.min.css';

const Routing =(
    <Router>
            <Switch>
            <Route path="/Personalarticle" component={Personal} />    
            <Route path="/Profile" component={Profile} />
            <Route path="/Bookmark" component={Bookmark} />
            <Route path="/Stats" component={Stats} />
            <Route path="/Stories" component={Stories} />
            <Route path="/Newstory" component={Newstory} /> 
            <Route path="/Comments" component={Comments} />
            <Route path="/Popover" component={Popover} />
            <Route path="/Article" component={Article} />
            <Route path="/Onezero" component={Onezero} />
            <Route path="/Register" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
            </Switch>
    </Router>
)

ReactDOM.render(Routing, document.getElementById('Home'));
// ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
