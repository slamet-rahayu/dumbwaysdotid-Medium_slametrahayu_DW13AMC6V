import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Login from './view/Login';
import Home from './view/Home';
import Categorydetail from './view/categorydetail';
import Onezero from './view/Category-page';
import Article from './view/Article';
import Articledetail from './view/Articledetail';
import Popular from './components/Popular';
import Comments from './view/Comment';
import Popover from './view/Popover';
import Newstory from './view/New-story';
import Stories from './view/Stories';
import Profile from './view/Profile';
import Personal from './view/Personalarticle';
import Elemental from './view/Elemental';
import * as serviceWorker from './serviceWorker';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Stats from './view/stats';
import Bookmark from './view/Bookmark';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';
import store from './_store/articlestore'
import Gen from './view/Gen'
import FormRegister from './view/FormRegister'

const Routing =(
<Provider store={store}>
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
                <Route path="/Articledetail" component={Articledetail} />
                <Route path="/Categorydetail" component={Categorydetail} />
                <Route path="/Onezero" component={Onezero} />
                <Route path="/Register" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/Gen" component={Gen} />
                <Route path="/Popular" component={Popular} />
                <Route path="/Elemental" component={Elemental} />
                <Route path="/FormRegister" component={FormRegister} />
                <Route path="/" component={Home} />
            </Switch>
    </Router>
</Provider>
)

ReactDOM.render(Routing, document.getElementById('Home'));
// ReactDOM.render(<Login />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
