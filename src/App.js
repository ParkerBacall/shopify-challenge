import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './routes/Home'
import About from './routes/About'
import Header from './components/Header'
import Navigation from './components/Navigation'


import './App.css';


export default function App() {
    return (
        <div className="page-container">

        <div className="page">

        <Header/>
        <Navigation/>

        <Router>
            <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>

            </Switch>
        </Router>
        </div>
        </div>
    )
}
