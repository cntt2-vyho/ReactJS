import React, { Component } from 'react';

class NewsItem extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="col-lg-4">
                <div className="card-deck">
                    <div className="card">
                        <a href="/details"> <img className="card-img-top" src={this.props.image} width="100%" /></a>
                        <div className="card-body">
                            <h4 className="card-title">{this.props.title}</h4>
                            <p style={{ textDecoration: 'none' }}>{this.props.content}</p>
                        </div>
                    </div>
                </div>
                <hr/> 
            </div>
        );
    }
}

export default NewsItem;