import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <p>© Your Website 2019. All Rights Reserved.</p>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/">Privacy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/">Terms</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </footer>

            </div>
        );
    }
}

export default Footer;