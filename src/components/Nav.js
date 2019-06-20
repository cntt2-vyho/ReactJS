import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">React Router - News</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
      <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">

                                    <NavLink to="/home" activeClassName="vycuteo"><a>Home</a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/news"><a>News</a></NavLink>

                                </li>
                                <li className="nav-item">

                                    <NavLink to="/details"><a>Details</a></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact"><a>Contact</a></NavLink>

                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;