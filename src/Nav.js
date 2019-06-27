import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#99004d', padding: '8px 250px'}}>
            <a className="navbar-brand" href="https://facebook.com">REACT</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId" style={{display: 'inline-block !important'}}>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0" style={{float: 'right'}}>
                <li className="nav-item active">
                  <a className="nav-link" href="https://facebook.com">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="https://facebook.com">Xem danh sách</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}
