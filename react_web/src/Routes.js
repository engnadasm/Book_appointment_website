import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Screen3 from "./components/Screen3";
import Screen2 from "./components/Screen2";
import Home from "./components/Screen1";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Screen2" component={Screen2} />
                    <Route path="/Screen3" component={Screen3} />
                </Switch>
            </Router>
        )
    }
}
