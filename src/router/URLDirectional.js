import React, { Component } from 'react';
import News from './../components/News';
import Home from '../components/Home';
import Details from '../components/Details';
import Contact from '../components/Contact';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class URLDirectional extends Component {
    render() {
        return (
                <div>
                    <Route path="/home" component={Home} />
                    <Route path="/news" component={News} />
                    <Route path="/details/:slug.:id.html" component={Details} />
                    <Route path="/contact" component={Contact} />
                </div>
        );
    }
}

export default URLDirectional;