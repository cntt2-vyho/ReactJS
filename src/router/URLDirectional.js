import React, { Component } from 'react';
import News from './../components/News';
import Home from '../components/Home';
import Details from '../components/Details';
import Contact from '../components/Contact';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class URLDirectional extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/details" component={Details} />
                    <Route exact path="/contact" component={Contact} />
                </div>
        );
    }
}

export default URLDirectional;